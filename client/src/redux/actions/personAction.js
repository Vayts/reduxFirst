import {
	ACCEPT_PERSON, DELETE_PERSON, EDIT_PERSON_VALUE,
	GET_ALL_PERSONS, SET_EDIT_PERSON,
	SET_LOADING_LIST,
	SET_LOADING_RANDOM,
	SET_RANDOM_PERSON, TOGGLE_MODAL, UPDATE_PERSONS,
} from '@src/redux/actions/actionTypes';

export function setLoadingRandom() {
	return {
		type: SET_LOADING_RANDOM,
	};
}

export function setLoadingList() {
	return {
		type: SET_LOADING_LIST,
	};
}

// RandomPerson

export function getRandomPerson() {
	return async (dispatch) => {
		try {
			const response = await fetch('https://randomuser.me/api/')
				.then((res) => res.json())
				.then((data) => data)
				.catch((e) => e);
			dispatch(setPerson(generatePersonObj(response.results[0])));
		} catch {
			throw new Error('aaaaaa');
		}
	};
}

export function acceptPerson(person) {
	return async (dispatch) => {
		dispatch(addPerson(person));
		try {
			const response = await fetch('https://randomuser.me/api/')
				.then((res) => res.json())
				.then((data) => data)
				.catch((e) => e);
			dispatch(setPerson(generatePersonObj(response.results[0])));
		} catch {
			throw new Error('aaaaaa');
		}
	};
}

export function addPerson(person) {
	return {
		type: ACCEPT_PERSON,
		payload: person,
	};
}

export function setPerson(person) {
	return {
		type: SET_RANDOM_PERSON,
		payload: person,
	};
}

//getAll

export function getAllPersons() {
	return (dispatch) => {
		try {
			fetch('http://localhost:3001/persons')
				.then((res) => res.json())
				.then((data) => {
					setLoadingRandom();
					dispatch(getAllPersonsSuccess(data));
				})
				.catch((e) => e);
		} catch {
			throw new Error('aaaaaa');
		}
	};
}

function getAllPersonsSuccess(persons) {
	return {
		type: GET_ALL_PERSONS,
		payload: persons,
	};
}

// delete

export function deletePersonFetch(id) {
	return async (dispatch) => {
		dispatch(setLoadingList());
		fetch(`http://localhost:3001/person/delete/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch(deletePersonSuccess(data._id));
				dispatch(setLoadingList());
			});
	};
}

function deletePersonSuccess(id) {
	return {
		type: DELETE_PERSON,
		payload: id,
	};
}

// modal

export function toggleModal() {
	return {
		type: TOGGLE_MODAL,
	};
}

// edit

export function setEditPerson(person) {
	return {
		type: SET_EDIT_PERSON,
		payload: person,
	};
}

export function editPerson(name, value) {
	return {
		type: EDIT_PERSON_VALUE,
		name,
		value,
	};
}

export function editFetch(person) {
	return (dispatch) => {
		fetch(`http://localhost:3001/person/update/${person._id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(person),
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch(editFetchSuccess(data));
			});
	};
}

export function editFetchSuccess(person) {
	return {
		type: UPDATE_PERSONS,
		payload: person,
	};
}

// helper

function generatePersonObj(person) {
	return {
		name: `${person.name.first} ${person.name.last}`,
		email: person.email,
		age: person.dob.age,
		gender: person.gender === 'male' ? 'Мужчина' : 'Женщина',
		city: person.location.city,
		nickname: person.login.username,
		postcode: person.location.postcode,
		avatarSmall: person.picture.thumbnail,
		avatarLarge: person.picture.large,
	};
}
