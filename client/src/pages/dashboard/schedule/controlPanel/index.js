import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import AddCircle from 'material-ui/svg-icons/content/add-circle';

import AddAppointment from './addAppointment';


class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addOpen: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }


  handleToggle(option) {
    const toggles = {
      'addOpen': this.setState({addOpen: !this.state.addOpen})
    };
    toggles[option.type];
  }
  
  render() {

    return (

      <div style={{
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <RaisedButton
          label="Create"
          labelPosition="before"
          icon={<AddCircle />}
          onClick={() => this.handleToggle({type: 'addApp'})}
        />
        <AddAppointment 
          handleToggle={this.handleToggle}
          addOpen={this.state.addOpen}
        />

      </div>

    );

  }
}

export default ControlPanel;