import React from 'react';

// import './config/ReactotronConfig';

import { BrowserRouter } from 'react-router-dom';

// import GlobalStyle from './styles/global';

// import Header from './components/Header';
// import Sidebar from './components/Sidebar';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <Routes />
      {/* <GlobalStyle /> */}
    </BrowserRouter>
  );
}

export default App;
