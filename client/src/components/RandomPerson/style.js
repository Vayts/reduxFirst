import styled from 'styled-components';

export const RandomBlock = styled.div`
  box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.13);
	border-radius: 10px;
	height: 100%;
	width: 100%;
	flex-basis: 40%;
	overflow: hidden;
	position: relative;
`;

export const Person = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const PersonAvatarWrapper = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: rgba(121, 119, 119, 0.32);
`;

export const PersonTitleInfo = styled.h2`
	width: 100%;
	text-align: center;
	margin: 0;
	
	font-size: ${(props) => (props.small === true ? '20px' : '28px')};
`;

export const PersonButtons = styled.div`
	display: flex;
	justify-content: space-around;
`;
