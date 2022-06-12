import React, { useEffect } from 'react';
import {
	Person, PersonAvatarWrapper, PersonButtons,
	PersonTitleInfo,
	RandomBlock,
} from '@src/components/RandomPerson/style';
import { Title } from '@src/components/UI/Title/Title';
import { Avatar } from '@src/components/Avatar/Avatar';
import { Button } from '@src/components/UI/Button/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { acceptPerson, getRandomPerson, setLoadingRandom } from '@src/redux/actions/personAction';
import { Loader } from '@src/components/UI/Loader/Loader';
import { PersonInfoList } from '@src/components/RandomPerson/PersonInfoList/PersonInfoList';

const RandomPerson = ({ person, loadingRandom, getPerson, acceptPerson, setLoading }) => {
	useEffect(() => {
		getPerson();
	}, []);

	const reject = () => {
		getPerson();
		setLoading();
	};
	
	const accept = async () => {
		fetch('http://localhost:3001/person/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(person),
		})
			.then((res) => res.json())
			.then((data) => {
				acceptPerson(data);
			})
			.catch(() => {
				throw new Error('Error');
			});
	};
	
	return (
		<RandomBlock>
			<Title title="Абсолютно случайный человек" color="#524eb7"/>
			{loadingRandom === true ? <Loader/>
				: (
					<Person>
						<PersonAvatarWrapper>
							<Avatar url={person.avatarLarge}/>
						</PersonAvatarWrapper>
						<PersonTitleInfo>
							{person.name}
						</PersonTitleInfo>
						<PersonTitleInfo small>
							{person.email}
						</PersonTitleInfo>
						<PersonInfoList person={person}/>
						<PersonButtons>
							<Button handler={accept} type="success" title="Принять"/>
							<Button handler={reject} type="reject" title="Отказать"/>
						</PersonButtons>
					</Person>
				)}
		</RandomBlock>
	);
};

RandomPerson.propTypes = {
	person: PropTypes.shape({
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
	loadingRandom: PropTypes.bool,
	getPerson: PropTypes.func,
	acceptPerson: PropTypes.func,
	setLoading: PropTypes.func,
};

function mapStateToProps(state) {
	return {
		person: state.person.person,
		loadingRandom: state.person.loadingRandom,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getPerson: () => dispatch(getRandomPerson()),
		acceptPerson: (person) => dispatch(acceptPerson(person)),
		setLoading: () => dispatch(setLoadingRandom()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomPerson);
