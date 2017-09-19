import React from 'react';

import Divider from 'material-ui/Divider';

import Header from './header';
import Category from './category';
import SplitList from './splitList';
import Buttons from './buttons';


class TrainerProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const gyms = this.buildGyms(this.props.profile.gyms);

    return (

      <div className="col-lg-6 col-sm-12" style={{height: '100%'}}>

        <Header image={this.props.profile.image_url} first={this.props.profile.first} last={this.props.profile.last} />

        <Divider />

        <Category type={'Qualifications'} text={this.props.profile.qualification} />

        <Divider />

        <Category type={'Biography'} text={this.props.profile.biography} />

        <Divider />

        <SplitList goals={this.props.profile.goals} gyms={this.props.profile.gyms}/>

        <Buttons />

      </div>

    );

  }
}

export default TrainerProfile;