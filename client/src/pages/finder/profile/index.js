import React from 'react';


import CancelBar from './cancelBar';
import TrainerProfile from './leftView';
import Appointments from './rightView';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '96%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>

        <CancelBar toggle={this.props.toggle} />

        <div style={{
          height: '95.5%',
          width: '100%',
          margin: '0',
          backgroundColor: '#f2f2f2'
        }}> 

          <TrainerProfile profile={this.props.profile} />

          <Appointments profile={this.props.profile} />

        </div>

      </div>

    );

  }
}

export default Profile;