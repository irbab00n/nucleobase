import React from 'react';

import CancelBar from './cancelBar';


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

        {/* HEADER */}

        <div style={{
          height: '200px',
          width: '100%',
          backgroundColor: 'gray'
        }}>

        </div>

        {/* TRAINER PROFILE INFO */}

        {/* SCHEDULE */}

      </div>

    );

  }
}

export default Profile;