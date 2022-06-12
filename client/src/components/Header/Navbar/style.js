import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 15px 0;
  background-color: #2d55ff;
  display: flex;
  justify-content: center;
  width: 100%;
	position: fixed;
	top: 0;
`;

export const LinkElem = styled(NavLink)`
  font-size: 20px;
  text-transform: uppercase;
  margin: 0 30px;
  text-decoration: none;
  color: #fff;
	font-weight: 300;

  &.active {
    text-decoration: underline;
  }
`;
