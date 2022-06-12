import {
	ACCEPT_PERSON,
	DELETE_PERSON, EDIT_PERSON_VALUE,
	GET_ALL_PERSONS, SET_EDIT_PERSON,
	SET_LOADING_RANDOM,
	SET_RANDOM_PERSON, TOGGLE_MODAL, UPDATE_PERSONS,
} from '@src/redux/actions/actionTypes';

const initialState = {
	personsArr: [],
	person: {},
	loadingRandom: false,
	loadingList: true,
	modal: false,
	editPerson: {},
	isEditValid: true,
};

export const personReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_RANDOM_PERSON:
		return { ...state, person: action.payload, loadingRandom: false };
	case SET_LOADING_RANDOM:
		return { ...state, loadingRandom: !state.loadingRandom };
	case ACCEPT_PERSON:
		return { ...state, person: {}, loadingRandom: true, personsArr: [action.payload, ...state.personsArr] };
	case GET_ALL_PERSONS:
		return { ...state, loadingList: false, personsArr: action.payload.reverse() };
	case DELETE_PERSON:
		return { ...state, personsArr: state.personsArr.filter((el) => el._id !== action.payload) };
	case SET_EDIT_PERSON:
		return { ...state, editPerson: action.payload, modal: true };
	case EDIT_PERSON_VALUE:
		return { ...state, editPerson: { ...state.editPerson, [action.name]: action.value } };
	case TOGGLE_MODAL:
		return { ...state, modal: !state.modal };
	case UPDATE_PERSONS:
		return {
			...state,
			modal: false,
			personsArr: state.personsArr.map((el) => {
				if (el._id === action.payload._id) {
					return action.payload;
				} 
				return el;
				
				// eslint-disable-next-line no-console
				// console.log(state.personsArr);
			},
			),
		};
	default:
		return state;
	}
};
