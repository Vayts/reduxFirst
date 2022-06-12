import React from 'react';
import PropTypes from 'prop-types';
import { TitleHolder, TitleText } from '@src/components/UI/Title/style';

export const Title = ({ title, color }) => {
	return (
		<TitleHolder color={color}>
			<TitleText>{title}</TitleText>
		</TitleHolder>
	);
};

Title.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string
};
