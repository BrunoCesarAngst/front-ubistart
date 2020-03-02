import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

import inputForm from '../Form/input';

import selectUf from '../Form/selectUf';

import selectStatus from '../Form/selectStatus';

export const Container = styled.div`
  width: 1118px;
  // height: 863px;
  margin-top: 20px;
  margin-left: 120px;
  letter-spacing: 0;
  opacity: 1;
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
  // justify-content: space-between;
  // display: flex;
  // flex-wrap: wrap;
  // flex: 1;

  div {
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
  background: #32b872 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: center;
  font: Bold 14px/16px Raleway;
  color: #ffffff;
`;

export const Button = styled.button``;
