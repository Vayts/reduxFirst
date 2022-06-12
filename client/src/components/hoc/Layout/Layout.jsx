import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header } from '@src/components/Header/Navbar/Navbar';
import { Wrapper } from './style';

export const Layout = ({ children }) => {
	return (
		<>
			<Header/>
			<Wrapper>
				{children}
			</Wrapper>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.element,
};
