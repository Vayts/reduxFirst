import React from 'react';
import PropTypes from 'prop-types';
import { DefaultButton } from '@src/components/UI/Button/style';

export const Button = ({ title, handler, type }) => {
	return (
		<DefaultButton type={type} onClick={handler}>{title}</DefaultButton>
	);
};

Button.propTypes = {
	title: PropTypes.string,
	handler: PropTypes.func,
	type: PropTypes.string,
};
