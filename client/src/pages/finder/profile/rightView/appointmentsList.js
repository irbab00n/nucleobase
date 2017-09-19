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

      <div style={{height: '94%', width: '100%', backgroundColor: 'white', display: 'list', overflowY: 'scroll'}}>
        {
          this.props.appointments.map((appointment, i) => (
            appointment.receiver === null ?
              <AppointmentEntry key={i} appointment={appointment} onClick={this.purchase}/> :
              <span key={i}></span>
          ))
        }
      </div>

    );

  }
}

export default AppointmentsList;