import styled from 'styled-components';

export const TitleHolder = styled.div`
  background-color: ${(props) => (props.color ? props.color : '#2d55ff')};
  padding: 15px 0;
`;

export const TitleText = styled.h2`
  color: #ffffff;
  text-align: center;
  font-weight: 300;
  margin: 0;
`;
