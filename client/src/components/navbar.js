import React from 'react';

import FlatButton from 'material-ui/FlatButton';


const Navbar = (props) => (

  <div style={{
    height: '50px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111822'
  }}>
    
    <div className="col-sm-8 col-sm-offset-2" style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>

      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        overflowX: 'visible',
        fontSize: '20px',
        color: 'white'
      }}>
        TRAINER FINDER
      </div>

      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        
        {
          !props.loggedIn ?
          <span></span>
          :
          <div>
            <FlatButton href="/" label="Search" style={{color: 'white'}} hoverColor="#002957"/>
            <span style={{width: '30px'}}></span>
            <FlatButton href="/dashboard" label="Dashboard" style={{color: 'white'}} hoverColor="#002957"/>
          </div>
        }

        

      </div>

      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        {
          props.loggedIn ?
          <FlatButton href="/logout" label="Logout" style={{color: 'white'}} hoverColor="#002957"/>
        :
          <div>
            <FlatButton href="/signup" label="Signup" style={{color: 'white'}} hoverColor="#002957"/>
            <span style={{width: '30px'}}></span>
            <FlatButton href="/login" label="Login" style={{color: 'white'}} hoverColor="#002957"/>
          </div>
        }

        
      </div>

    </div>

  </div>

);

export default Navbar;