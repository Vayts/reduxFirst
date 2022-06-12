import React from 'react';
import { Avatar } from '@src/components/Avatar/Avatar';
import { DeletePerson, EditPerson, PersonLi, PersonName } from '@src/components/Persons/PersonItem/style';
import PropTypes from 'prop-types';

export const PersonItem = ({ person, deleteFunc, editFunc }) => {
	return (
		<PersonLi>
			<Avatar url={person.avatarSmall}/>
			<PersonName>
				{person.name}
			</PersonName>
			<DeletePerson onClick={() => { deleteFunc(person._id); }}>&#10006;</DeletePerson>
			<EditPerson onClick={() => { editFunc(person); }}>&#9998;</EditPerson>
		</PersonLi>
	);
};

PersonItem.propTypes = {
	person: PropTypes.shape({
		_id: PropTypes.string,
		name: PropTypes.string,
		avatarSmall: PropTypes.string,
	}),
	deleteFunc: PropTypes.func,
	editFunc: PropTypes.func,
};
