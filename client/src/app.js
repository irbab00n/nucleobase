import React from 'react';
import ReactDOM from 'react-dom';

import Finder from './pages/finder';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/dashboard';


const endpoint = window.location.pathname.split('/');

const pages = {
  '': <Finder path={endpoint}/>,
  'login': <Login path={endpoint}/>,
  'signup': <Signup path={endpoint}/>,
  'dashboard': <Dashboard path={endpoint}/>
};

ReactDOM.render(pages[endpoint[1]], document.getElementById('root'));
