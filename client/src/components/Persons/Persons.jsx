import React, { useEffect } from 'react';
import { PersonsList, PersonsWrapper } from '@src/components/Persons/style';
import { Title } from '@src/components/UI/Title/Title';
import { PersonItem } from '@src/components/Persons/PersonItem/PersonItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePersonFetch, getAllPersons, setEditPerson } from '@src/redux/actions/personAction';
import { Loader } from '@src/components/UI/Loader/Loader';

const Persons = ({ persons, loadingList, getAllPersons, deletePerson, editPerson }) => {
	useEffect(() => {
		getAllPersons();
	}, []);
	
	const deleteHandler = (id) => {
		deletePerson(id);
	};
	
	const editHandler = (person) => {
		editPerson(person);
	};
	
	return (
		<PersonsWrapper>
			<Title title="Абсолютно случайные люди" color="#524eb7"/>
			<PersonsList>
				{loadingList === true ? <Loader/> 
					:					persons.map((person) => {
						return <PersonItem editFunc={editHandler} deleteFunc={deleteHandler} person={person} key={`${person.name.trim()}-${Math.random()}`} />;
					})}
			</PersonsList>
		</PersonsWrapper>
	);
};

Persons.propTypes = {
	persons: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			avatarSmall: PropTypes.string,
		}),
	),
	getAllPersons: PropTypes.func,
	deletePerson: PropTypes.func,
	editPerson: PropTypes.func,
	loadingList: PropTypes.bool,
};

function mapStateToProps(state) {
	return {
		persons: state.person.personsArr,
		loadingList: state.person.loadingList,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getAllPersons: () => dispatch(getAllPersons()),
		deletePerson: (id) => dispatch(deletePersonFetch(id)),
		editPerson: (person) => dispatch(setEditPerson(person)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
