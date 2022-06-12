const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	nickname: {
		type: String,
		required: true
	},
	postcode: {
		type: String,
		required: true
	},
	avatarSmall: {
		type: String,
		required: true
	},
	avatarLarge: {
		type: String,
		required: true
	},
})

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
