import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Login';
import Signup from './Signup';


const pages = {
  '/': <h1>Hello World from React</h1>,
  '/login': <Login />,
  '/signup': <Signup />
};

ReactDOM.render(pages[window.location.pathname], document.getElementById('root'));
