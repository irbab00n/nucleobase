import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, IndexRoute, hashHistory } from 'react-router-dom';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// App Root Components
import Finder from './pages/finder';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/dashboard';

// Dashboard sub-components
import Main from './pages/dashboard/main';
import Schedule from './pages/dashboard/schedule';
import Trainers from './pages/dashboard/trainers';

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Switch>
        <Route exact path="/" component={Finder} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  </MuiThemeProvider>, 
  document.getElementById('root')
);

// <Route path="dashboard" component={Dashboard}>
//   <IndexRoute component={Main}></IndexRoute>
//   <Route path="schedule" component={Schedule} />
//   <Route path="trainers" component={Trainers} />
//   <Route path="profile" component={<h1>Edit Profile View</h1>} />
// </Route>