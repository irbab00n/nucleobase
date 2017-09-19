import React from 'react';

import Avatar from 'material-ui/Avatar';


const Header = (props) => (

  <div style={{
    height: '200px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>
    <Avatar 
      size={150}
      src={props.image === null ? 'https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg' : props.image}
    />
    <div style={{
      height: '100px',
      display: 'flex',
      flexDirection: 'column',
      paddingRight: '30px'
    }}>

      <div style={{height: '30%'}}>
        <span style={{fontSize: '24px', paddingLeft: '10px'}}>{`${props.first} ${props.last}`.toUpperCase()}</span>
      </div>

      <div style={{height: '20%'}}>
        <span style={{fontStyle: 'italic', color: '#999999', paddingLeft: '10px'}}>San Francisco, CA</span>
      </div>

      <div style={{height: '50%'}}>
        <span style={{fontStyle: 'italic', color: '#999999', paddingLeft: '10px'}}>STAR RATING</span>
      </div>

    </div>

  </div>

);

export default Header;