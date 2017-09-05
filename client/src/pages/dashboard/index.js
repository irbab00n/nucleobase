import React from 'react';

import Navbar from '../../components/navbar';
import DashNav from './dashnav';


const pages = {
  '': <h1>Dashboard View?</h1>,
  'edit': <h1>Edit View</h1>,
  'schedule': <h1>Schedule View</h1>,
  'trainers': <h1>Trainers View</h1>,
  'clients': <h1>Clients View</h1> 
};

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
          height: '94.8%',
          backgroundColor: '#BEBAB9',
          padding: 0
        }}>

          <DashNav />

          {
            this.props.path[2] ?
              pages[this.props.path[2]] :
              <h1>Dashboard Default</h1>
          }
        

        </div>

      </div>
    );

  }
}

export default Dashboard;