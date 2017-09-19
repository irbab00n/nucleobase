import React from 'react';


class AppointmentsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{height: '94%', width: '100%', backgroundColor: 'white'}}>
        {
          this.props.appointments.map((appointment, i) => (
            <div key={i} style={{
              height: '100px',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'green'
            }}>
              <div style={{
                height: '100px',
                width: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'blue'
              }}>
                <div style={{
                  height: '50px',
                  width: '100%',
                }}>
                  SEP
                </div>

                <div style={{
                  height: '50px',
                  width: '100%',
                }}>
                  18
                </div>
              </div>
            </div>
          ))
        }
      </div>

    );

  }
}

export default AppointmentsList;