import React from 'react';

import ControlPanel from './controlPanel';
import Calendar from './calendar';


class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{height: '96%', width: '100%'}}>
        
        <div className="col-lg-3 col-xsm-6" style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <ControlPanel />
        </div>

        <div className="col-lg-9 col-xsm-6" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly', 
          padding: '0'
        }}>
          <div style={{
            height: '600px',
            minWidth: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#BEBAB9'
          }}>
            <Calendar year={this.props.year}/>
          </div>

        </div>

        <div className="row" style={{
          margin: '0',
          minHeight: '295px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#111822'
        }}>
          Some content down here
        </div>
      </div>

    );

  }
}

export default Schedule;