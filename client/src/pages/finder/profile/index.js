import React from 'react';


import CancelBar from './cancelBar';
import TrainerProfile from './leftView';


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

        {/* CANCEL BAR */}

        <CancelBar toggle={this.props.toggle}/>

        {/* MAIN BODY */}

        <div style={{
          height: '95.4%',
          width: '100%',
          margin: '0',
          backgroundColor: '#f2f2f2'
        }}> 

          {/* TRAINER INFO */}

          <TrainerProfile />

          {/* TRAINER APPOINTMENT */}

          <div className="col-lg-6 col-sm-12" style={{height: '100%', backgroundColor: 'gray'}}>
            APPOINTMENTS
          </div>

        </div>

      </div>

    );

  }
}

export default Profile;