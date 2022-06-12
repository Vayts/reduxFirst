const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Person = require('./model/Person');

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/persons", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log('connect to db')
}).catch((err) => {
	console.log('error', err)
})

app.get('/persons', async (req, res) => {
	const persons = await Person.find();
	res.json(persons)
})

app.delete('/person/delete/:id', async (req, res) => {
	const id = req.params.id;
	
	const response = await Person.findByIdAndDelete(id)
	
	res.json(response)
})

app.put('/person/update/:id', async (req, res) => {
	const id = req.params.id;
	const response = await Person.findByIdAndUpdate(id, req.body, {new: true})
	res.json(response)
})

app.post('/person/add',(req, res) => {
	const person = new Person({
		name: req.body.name,
		email: req.body.email,
		age: req.body.age,
		gender: req.body.gender,
		city: req.body.city,
		nickname: req.body.nickname,
		postcode: req.body.postcode,
		avatarSmall: req.body.avatarSmall,
		avatarLarge: req.body.avatarLarge,
	})
	
	person.save()
		.then(() => {
			res.json(person);
		}).catch(() => {
			res.status(401).send({message: 'Error'})
	});
	
	
})

app.listen(3001, () => {
	console.log('start')
})
