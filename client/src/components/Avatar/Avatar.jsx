import React from 'react';
import { AvatarHolder } from '@src/components/Avatar/style';
import PropTypes from 'prop-types';

export const Avatar = ({ url }) => {
	return (
		<AvatarHolder>
			<img src={url} alt=""/>
		</AvatarHolder>
	);
};

Avatar.propTypes = {
	url: PropTypes.string,
};
