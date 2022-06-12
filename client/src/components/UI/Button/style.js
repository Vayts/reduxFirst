import styled from 'styled-components';

export const DefaultButton = styled.button`
	min-width: 150px;
	border: none;
	display: inline-block;
	cursor: pointer;
	padding: 10px;
	margin: 10px;
	color: #fff;
	text-transform: uppercase;
	border-radius: 5px;

  background-color: ${(props) => {
		if (props.type === 'success') {
			return '#267340';
		}
		if (props.type === 'reject') {
			return '#961c1c';
		}
		if (props.type === 'primary') {
			return '#2d55ff';
		}
	}};
	
`;
