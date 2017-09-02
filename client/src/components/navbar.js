import React from 'react';

const Navbar = (props) => (

  <div style={{
    height: '5%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray'
  }}>
    
    <div className="col-sm-8 col-sm-offset-2" style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>

      <div style={{
        height: '100%',
        width: '400px',
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
        width: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginRight: '16.66666667%'
      }}>
        {/*Replace these with buttons ASAP*/}
        <span><a href="/login">Login</a></span>
        <span><a href="/signup">Sign up</a></span>
      </div>

    </div>

  </div>

);

export default Navbar;