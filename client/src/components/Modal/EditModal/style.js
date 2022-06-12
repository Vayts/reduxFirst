import styled from 'styled-components';

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.56);
	display: flex;
  justify-content: center;
	align-items: center;
	z-index: 100;
`;

export const Modal = styled.div`
	background-color: #fff;
	border-radius: 10px;
  position: relative;
`;

export const EditForm = styled.form`
	padding: 20px;
	text-align: center;
`;

export const EditList = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	width: 400px;
	flex-wrap: wrap;
`;

export const EditListItem = styled.li`
  display: flex;
	flex-direction: column;
	align-items: center;
	flex-basis: 50%;
`;

export const EditLabel = styled.label`
	margin-bottom: 10px;
`;

export const EditInput = styled.input`
	margin-bottom: 15px;
`;

export const EditMessage = styled.p`
  color: #e03636;
	margin: 5px 0;
	height: 25px;
`;

export const CloseButton = styled.span`
	position: absolute;
	top: 15px;
	right: 15px;
	cursor: pointer;
	color: #fff;
`;
