import React from 'react';
import { PersonInfo, PersonInfoItem } from '@src/components/RandomPerson/PersonInfoList/style';
import PropTypes from 'prop-types';

export const PersonInfoList = ({ person }) => {
	return (
		<PersonInfo>
			<PersonInfoItem>
				Возраст: &nbsp;
				{person.age}
			</PersonInfoItem>
			<PersonInfoItem>
				Пол: &nbsp;
				{person.gender}
			</PersonInfoItem>
			<PersonInfoItem>
				Город: &nbsp;
				{person.city}
			</PersonInfoItem>
			<PersonInfoItem>
				Никнейм: &nbsp;
				{person.nickname}
			</PersonInfoItem>
			<PersonInfoItem>
				Почтовый код: &nbsp;
				{person.postcode}
			</PersonInfoItem>
		</PersonInfo>
	);
};

PersonInfoList.propTypes = {
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
};
