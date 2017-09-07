import React from 'react';

import List from './list';
import Preview from './preview';


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

          <List />

          <Preview />

        </div>
      </div>

    );

  }
}

export default ApptList;