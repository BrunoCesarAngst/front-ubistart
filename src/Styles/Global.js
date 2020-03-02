import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F3F5F9 0% 0% no-repeat padding-box;
    opacity: 1;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Raleway, sans-serif;
  }

  #root {
    width: auto;
    // height: 2174px;
    margin: 0 auto;
    padding: 0 20px 50px 20px;
  }

  button {
    cursor: pointer;
  }
`;
