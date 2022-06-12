import React from 'react';
import Persons from '@src/components/Persons/Persons';
import RandomPerson from '@src/components/RandomPerson/RandomPerson';
import { HomeWrapper } from '@src/components/Home/style';
import EditModal from '@src/components/Modal/EditModal/EditModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = ({ modal }) => {
	return (
		<HomeWrapper>
			{modal === true ? <EditModal/> : null}
			<Persons/>
			<RandomPerson/>
		</HomeWrapper>
	);
};

Home.propTypes = {
	modal: PropTypes.bool,
	editPerson: PropTypes.shape({
		name: PropTypes.string,
		avatarLarge: PropTypes.string,
		age: PropTypes.number,
		city: PropTypes.string,
		postcode: PropTypes.oneOfType([
			PropTypes.number, PropTypes.string,
		]),
		nickname: PropTypes.string,
		email: PropTypes.string,
		gender: PropTypes.string,
	}),
};

function mapStateToProps(state) {
	return {
		modal: state.person.modal,
	};
}

export default connect(mapStateToProps)(Home);
