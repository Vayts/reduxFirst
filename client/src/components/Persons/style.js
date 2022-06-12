import styled from 'styled-components';

export const PersonsWrapper = styled.div`
  box-shadow: 0px 0px 15px 5px rgba(51, 50, 50, 0.21);
	border-radius: 10px;
  height: 100%;
  width: 100%;
  flex-basis: 50%;
	overflow: hidden;
	position: relative;
`;

export const PersonsList = styled.ul`
  list-style: none;
	margin: 0;
	padding: 10px 10px 0;
	height: calc(600px - 62px);
	overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;

  &::-webkit-scrollbar { width: 0; }
`;
