import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
  margin-left: 120px;
  text-align: left;
  letter-spacing: 0;
  opacity: 1;
`;

export const Nav = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  color: #000000;
  font-weight: bold;

  text {
    letter-spacing: 0;
  }

  button {
    display: block;
    height: 40px;
    width: 186px;
    margin-right: 140px;
    background: #239b5c 0% 0% no-repeat padding-box;
    border-radius: 4px;
    text-align: center;
    font: Bold 14px/16px Raleway;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  height: 40px;
  width: 186px;
  margin-right: 140px;
  background: #239b5c 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: center;
  font: Bold 14px/16px Raleway;
  color: #ffffff;
  cursor: pointer;

  text-decoration: none;

  button {
    &:hover {
      background: ${darken(0.15, '#239b5c')};
    }
  }
`;

export const OutletsTable = styled.table`
  width: 100%;
  height: 806px;
  margin-top: 25px;
  margin-bottom: 30px;
  padding: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;

  thead th {
    margin-top: 276px;
    padding: 12px;
    font: Bold 11px/13px Raleway;
    color: #828b97;
  }

  tbody td {
    margin-top: 25px;
    padding: 12px;
    border-bottom: 1px solid #eee;
    text-align: left;
    font: Regular 14px/16px Raleway;
    color: #5b626b;
  }
`;

export const SearchOutlets = styled.div``;
export const Pages = styled.div`
  margin-top: 55px;
  display: flex;
  font: Italic 11px/13px Raleway;
  color: #5b626b;
`;
