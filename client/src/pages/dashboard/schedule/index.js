import React from 'react';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log('view rendered: Schedule');

    return (

      <div style={{
        height: '96%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#002957'
      }}>

        <div id="left-side" style={{
          height: '100%',
          width: '25%',
          minWidth: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DCD8D7'
        }}>
          <span>Control panel</span>
        </div>

        <div id="right-side" style={{
          height: '100%',
          width: '75%',
          minWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>

          <div style={{
            height: '70%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#b6b1af'
          }}>
            Schedule Component here
          </div>

          <div style={{
            height: '30%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#a9a4a2'
          }}>
            Additional Drawer
          </div>

        </div>

      </div>

    );

  }
}

export default Schedule;