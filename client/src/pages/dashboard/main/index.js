import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div style={{
        height: '96%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>

        <div style={{
          height: '48%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#4DC1EA'
        }}>

        </div>

        <div style={{
          height: '48%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#4DC1EA'
        }}>
          
        </div>

      </div>

    );

  }
}

export default Main; 