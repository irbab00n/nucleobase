import React from 'react';

import { Step, Stepper, StepLabel, StepButton, StepContent } from 'material-ui/Stepper';

import StepOne from './steps/stepOne';
import StepTwo from './steps/stepTwo';
import StepThree from './steps/stepThree';
import StepFour from './steps/stepFour';

import AJAX from '../../ajax.js';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {},
      finished: false,
      stepIndex: 0,
      type: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      biography: '',
      qualifications: '',
      goals: '',
      gyms: '',
      profileImage: ''
    };
    this.selectProfileType = this.selectProfileType.bind(this);
    this.stepTwoUpdater = this.stepTwoUpdater.bind(this);
    this.stepThreeUpdater = this.stepThreeUpdater.bind(this);
    this.stepFourUpdater = this.stepFourUpdater.bind(this);
  }

  componentWillMount() {
    AJAX.get('/session', {}, (session) => {
      this.setState({session: session});
    });
  }

  selectProfileType(type) {
    this.setState({
      type,
      stepIndex: 1
    });
  }

  stepTwoUpdater(options) {
    const { firstName, lastName, biography, phoneNumber } = options;
    let stepIndex = 3;
    if (this.state.type === 'trainer') {
      stepIndex = 2;
    }
    this.setState({
      firstName,
      lastName,
      biography,
      phoneNumber,
      stepIndex: stepIndex
    });
  }

  stepThreeUpdater(options) {
    const { qualifications, goals } = options;
    this.setState({
      qualifications,
      goals,
      stepIndex: 3
    });
  }

  stepFourUpdater(options) {
    const { gyms, profileImage } = options;
    this.setState({
      gyms,
      profileImage
    });
  }

  render() {

    console.log('state: ', this.state);

    const { stepIndex, type, session } = this.state;

    return (

      <div className="col-sm-8 col-sm-offset-2" style={{
        height: '94.8%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
      }}>

        <div style={{maxWidth: '800px', maxHeight: '800px'}}>
          <Stepper
            activeStep={stepIndex}
            linear={false}
            orientation="vertical"
          >
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 0})}>
                Choose Account Type
              </StepButton>
              <StepContent>
                <StepOne select={this.selectProfileType}/>
              </StepContent>
            </Step>
            <Step>
              {
                this.state.type === '' ?
                  <StepLabel>
                    Basic Info
                  </StepLabel> :
                  <StepButton onClick={() => this.setState({stepIndex: 1})}>
                    Basic Info
                  </StepButton>
              }
              <StepContent>
                <StepTwo updateInfo={this.stepTwoUpdater} profileType={type}/>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <span style={{fontStyle: 'italic'}}>Trainers Only</span>
              </StepLabel>
              <StepContent>
                <StepThree updateInfo={this.stepThreeUpdater}/>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                Profile Picture &
              </StepLabel>
              <StepContent>
                <StepFour session={session} updateInfo={this.stepFourUpdater}/>
              </StepContent>
            </Step>
          </Stepper>
        </div>

      </div>

    );

  }
}

export default Create;