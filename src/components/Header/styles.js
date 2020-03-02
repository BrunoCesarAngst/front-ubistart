import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

export const Container = styled.header`
  display: flex;
  top: 0px;
  height: 60px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #0000001a;
  opacity: 1;
`;

export const Content = styled.div`
  display: flex;
  margin-left: 1190px;
`;

export const User = styled(Grid)`
  display: flex;
  align-items: center;
`;
