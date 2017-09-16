import React from 'react';

import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';


const CancelBar = (props) => (

  <div style={{
    height: '38px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }}>
    <IconButton
      tooltip="Close"
      tooltipPosition="bottom-center"
      onClick={props.toggle}
      iconStyle={{color: '#cccccc'}}
    >
      <ClearIcon />
    </IconButton>
  </div>

);

export default CancelBar;