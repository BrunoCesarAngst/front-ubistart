import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

import { darken } from 'polished';

import inputForm from '../Form/input';

import selectUf from '../Form/selectUf';

export const Container = styled.div`
  margin-bottom: 50px;
  width: 991px;
  border-radius: 4px;
`;

export const TheTitles = styled.legend`
  display: flex;
  margin-bottom: 22px;
  margin-left: 0;
  text-align: left;
  text-decoration: none;
  font: Bold 12px/14px Raleway;
  letter-spacing: 1.2px;
  color: #a9292c;
`;

export const Form = styled(Unform)`
  justify-content: space-between;
  // display: flex;
  // flex-wrap: wrap;
  // flex: 1;

  > div {
    width: 991px;
    margin-top: 32px;
    margin-bottom: 55px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
  }

  label {
    // margin-top: 100px;
    font: Medium 14px/16px Raleway;
    color: #828b97;
  }

  select {
    margin: 10px 0;
    height: 40px;
    background: #fafbfc 0% 0% no-repeat padding-box;
    border: 1px solid #e7e9f1;
    border-radius: 4px;
  }
`;

export const Input = styled(inputForm)`
  margin: 10px 0;
  height: 40px;
  background: #fafbfc 0% 0% no-repeat padding-box;
  border: 1px solid #e7e9f1;
  border-radius: 4px;
`;

export const SelectUf = styled(selectUf)`
  margin: 10px 0;
  height: 40px;
  background: #fafbfc 0% 0% no-repeat padding-box;
  border: 1px solid #e7e9f1;
  border-radius: 4px;
`;

export const ButtonInput = styled.button`
  margin-top: 150px;
  width: 186px;
  height: 40px;
  background: #32b872;
  border-radius: 4px;
  text-align: center;
  // font: Bold 14px/16px Raleway;
  color: #ffffff;
`;

export const AreaButtons = styled.div`
  width: 330px;
`;

export const ButtonType = styled.button`
  display: flex;
  color: #bac0c9;
  flex-direction: row;
  align-items: center;
  background: #fafbfc;
  border: 1px solid #e7e9f1;
  border-radius: 4px;
  opacity: 1;
  justify-content: space-around;
  width: 207px;
  height: 40px;

  &:hover {
    background: ${darken(-0.3, '#626ED4')};
    border: ${darken(0.5, '#626ED4')};
  }
`;
