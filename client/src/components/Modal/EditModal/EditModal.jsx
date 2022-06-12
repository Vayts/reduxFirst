import React from 'react';
import {
	CloseButton,
	EditForm,
	EditInput,
	EditLabel,
	EditList,
	EditListItem, EditMessage,
	Modal,
	ModalWrapper,
} from '@src/components/Modal/EditModal/style';
import { Title } from '@src/components/UI/Title/Title';
import { Avatar } from '@src/components/Avatar/Avatar';
import { Button } from '@src/components/UI/Button/Button';
import { editFetch, editPerson, toggleModal } from '@src/redux/actions/personAction';
import { connect } from 'react-redux';

const EditModal = ({ person, closeModal, editPersonValue, editFetch }) => {
	// eslint-disable-next-line no-console
	console.log(person);
	
	const valueHandler = (event) => {
		console.log(event.target.value);
		const editedPerson = Object.assign(person);
		editedPerson[event.target.name] = event.target.value;
		editPersonValue(event.target.name, event.target.value);
	};
	
	const submitEdit = (event) => {
		event.preventDefault();
		editFetch(person);
	};
	
	return (
		<ModalWrapper>
			<Modal>
				<Title title="Редактировать" />
				<CloseButton onClick={closeModal}>&#10006;</CloseButton>
				<EditForm onSubmit={submitEdit}>
					<Avatar url={person.avatarLarge} />
					<EditMessage />
					<h1>{person.name}</h1>
					<EditList>
						<EditListItem>
							<EditLabel>Возраст</EditLabel>
							<EditInput onChange={valueHandler} type="number" name="age" value={person.age}/>
						</EditListItem>
						<EditListItem>
							<EditLabel>Город</EditLabel>
							<EditInput onChange={valueHandler} type="text" name="city" value={person.city}/>
						</EditListItem>
						<EditListItem>
							<EditLabel>Никнейм</EditLabel>
							<EditInput onChange={valueHandler} type="text" name="nickname" value={person.nickname}/>
						</EditListItem>
						<EditListItem>
							<EditLabel>Почтовый код</EditLabel>
							<EditInput onChange={valueHandler} type="text" name="postcode" value={person.postcode}/>
						</EditListItem>
					</EditList>
					<Button type="primary" title="Подтвердить" />
				</EditForm>
			</Modal>
		</ModalWrapper>
	);
};

function mapStateToProps(state) {
	return {
		person: state.person.editPerson,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		closeModal: () => dispatch(toggleModal()),
		editPersonValue: (name, value) => dispatch(editPerson(name, value)),
		editFetch: (person) => dispatch(editFetch(person)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
