import React from 'react';

import AppointmentEntry from './appointmentEntry';


class AppointmentsList extends React.Component {
  constructor(props) {
    super(props);
    this.purchase = this.purchase.bind(this);
  }

  purchase() {
    console.log('You\'ve just purchased me!!!');
  }

  render() {

    return (

      <div style={{height: '94%', width: '100%', backgroundColor: 'white'}}>
        {
          this.props.appointments.map((appointment, i) => (
            <AppointmentEntry key={i} appointment={appointment} onClick={this.purchase}/>
          ))
        }
      </div>

    );

  }
}

export default AppointmentsList;