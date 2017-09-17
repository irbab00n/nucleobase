import React from 'react';

import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';



class TrainerProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="col-lg-6 col-sm-12" style={{height: '100%'}}>

        {/* HEADER */}

        <div style={{
          height: '200px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Avatar 
            size={150}
            src="https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg"
          />
          <div style={{
            height: '100px',
            display: 'flex',
            flexDirection: 'column',
            paddingRight: '30px'
          }}>

            <div style={{height: '30%'}}>
              <span style={{fontSize: '24px', paddingLeft: '10px'}}>THOMAS COSBY</span>
            </div>

            <div style={{height: '20%'}}>
              <span style={{fontStyle: 'italic', color: '#999999', paddingLeft: '10px'}}>San Francisco, CA</span>
            </div>

            <div style={{height: '50%'}}>
              <span style={{fontStyle: 'italic', color: '#999999', paddingLeft: '10px'}}>STAR RATING</span>
            </div>

          </div>

        </div>

        <Divider />

        {/* PROFILE BODY */}

        <div style={{
          height: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <span style={{fontStyle: 'italic', color: '#999999', padding: '10px 0 0 10px'}}>Qualifications</span>
            <p style={{padding: '10px 0 0 30px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Curabitur cursus eget magna eu posuere. Cras convallis ut augue quis facilisis. 
              Nunc et lobortis arcu, pulvinar vehicula risus. 
              Maecenas pulvinar dolor augue. Phasellus ex lorem.
            </p>
          </div>
        </div>

        <Divider />

        <div style={{
          height: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <span style={{fontStyle: 'italic', color: '#999999', padding: '10px 0 0 10px'}}>Biography</span>
            <p style={{padding: '10px 0 0 30px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Curabitur cursus eget magna eu posuere. Cras convallis ut augue quis facilisis. 
              Nunc et lobortis arcu, pulvinar vehicula risus. 
              Maecenas pulvinar dolor augue. Phasellus ex lorem.
            </p>
          </div>
        </div>


      </div>

    );

  }
}

export default TrainerProfile;