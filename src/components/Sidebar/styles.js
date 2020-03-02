import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.ul`
  display: flex;
  margin-top: -60px;
  position: fixed;
  left: 0px;
  width: 88px;
  height: 768px;
  background: #a9292c 0% 0% no-repeat padding-box;
  opacity: 1;

  .first {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 88px;
    height: 60px;
    padding: 8px;
    list-style: none;
  }

  li {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 88px;
    height: 88px;
    padding: 15px;
    list-style: none;

    &:hover {
      background: ${darken(0.15, '#a9292c')};
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font: Bold 12px/13px Raleway;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  text {
    margin-top: 5px;
  }
`;
