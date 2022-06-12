import styled from 'styled-components';

export const PersonLi = styled.li`
  display: flex;
	align-items: center;
  box-shadow: 0px 0px 15px 5px rgba(51, 50, 50, 0.21);
	margin-bottom: 15px;
	padding: 10px;
	position: relative;
`;

export const PersonName = styled.h2`
	font-size: 20px;
	margin: 0 0 0 30px;
`;

export const DeletePerson = styled.span`
  position: absolute;
	top: 10px;
	right: 15px;
	user-select: none;
	
	&:hover {
		transition: all 0.1s;
    cursor: pointer;
		transform: scale(1.1);
	}
`;

export const EditPerson = styled.span`
  position: absolute;
	bottom: 10px;
	right: 15px;
  transform: rotateZ(90deg);
	user-select: none;
	
	&:hover {
		transition: all 0.1s;
    cursor: pointer;
		transform: rotateZ(90deg) scale(1.1);
	}
`;
