import React from 'react';

class ApptList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '600px',
        minWidth: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div className="row" style={{
          width: '100%',
          height: '100%',
        }}>

          <div className="col-lg-4 col-sm-4" style={{
            height: '100%',
            backgroundColor: '#DCD8D7'
          }}>
            Result List
          </div>

          <div className="col-lg-8 col-sm-8" style={{
            height: '100%',
            backgroundColor: '#BEBAB9'
          }}>
            Preview
          </div>

        </div>
      </div>

    );

  }
}

export default ApptList;