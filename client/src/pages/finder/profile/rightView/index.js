import React from 'react';

import AppointmentsList from './appointmentsList';

import AJAX from '../../../../ajax';


class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      loading: false
    };
  }

  componentWillMount() {
    let options = {
      sender: this.props.profile.id
    };
    this.setState({
      loading: true
    });
    AJAX.get('/appointments', options, (appointments) => {
      appointments.sort(function(a, b) {
        return Date.parse(a.date) - Date.parse(b.date);
      });
      this.setState({
        appointments,
        loading: false
      });
    });
  }

  render() {

    const { loading, appointments } = this.state;

    return (

      <div className="col-lg-6 col-sm-12" style={{height: '100%', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

        <div style={{
          height: '50px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <span style={{fontSize: '20px'}}>TRAINER APPOINTMENTS</span>
        </div>

        {
          loading ?
            <h1>Loading</h1> :
            <AppointmentsList appointments={appointments} />
        }

        <span style={{height: '30px'}}></span>

        <div style={{
          height: '30%',
          width: '100%',
          backgroundColor: 'gray'
        }}>
          Some content
        </div>

      </div>

    );

  }
}

export default Appointments;