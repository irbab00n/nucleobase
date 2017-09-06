import React from 'react';
import $ from 'jquery';

import Navbar from '../../components/navbar';
import SearchBar from './searchbar';

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/verify',
      success: (data) => {
        console.log('logged in: ', data.message);
        this.setState({
          loggedIn: data.message
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {

    return (

      <div className=".col-lg-12" style={{
        height: '100%',
        width: '100%'
      }}>

        <Navbar loggedIn={this.state.loggedIn}/>

        <div className="col-sm-8 col-sm-offset-2" style={{
          height: '94.8%',
          backgroundColor: '#d9d9d9'
        }}>
          
          <SearchBar />
          <a href="/dashboard">Dashboard View</a>

        </div>

      </div>
      
    );

  }

}

export default Finder;