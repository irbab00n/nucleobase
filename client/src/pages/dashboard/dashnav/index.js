import React from 'react';

import FlatButton from 'material-ui/FlatButton';


class DashNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}>
        <span style={{width: '100%', height: '2px', backgroundColor: '#cee61f'}}></span>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#002957'
        }}>
          <FlatButton href="/dashboard/" label="Dashboard" style={{color: 'white'}} hoverColor="#BEBAB9"/>
          <FlatButton href="/dashboard/edit" label="Edit" style={{color: 'white'}} hoverColor="#BEBAB9"/>
          <FlatButton href="/dashboard/schedule" label="Schedule" style={{color: 'white'}} hoverColor="#BEBAB9"/>
          <FlatButton href="/dashboard/trainers" label="Trainers" style={{color: 'white'}} hoverColor="#BEBAB9"/>
        </div>
      </div>
    );

  }
}

export default DashNav;