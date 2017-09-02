import React from 'react';

import Navbar from '../../components/navbar';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className=".col-lg-12" style={{
        height: '100%',
        width: '100%'
      }}>

        <Navbar />

        <div className="col-sm-8 col-sm-offset-2" style={{
          height: '100%',
          backgroundColor: '#d9d9d9'
        }}>
          Dashboard View
          <a href="/dashboard/"></a>

        </div>

      </div>
    );

  }
}

export default Dashboard;