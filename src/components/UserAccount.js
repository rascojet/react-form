import React, { Component } from 'react';
import CreateAccount from './CreateAccount';
import SocialDetails from './SocialDetails';
import Success from './Success';

class UserAccount extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    facebook: '',
    twitter: '',
    linkedin: ''
  };

  // Go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Restart Over
  restartOver = () => {
    const { step } = this.state;
    this.setState({
      step: 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, facebook, twitter, linkedin } = this.state;
    const values = { firstName, lastName, email, facebook, twitter, linkedin };

    switch (step) {
      case 1:
        return (
          <CreateAccount
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <SocialDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
      return (
        <Success
          restartOver={this.restartOver}
          handleChange={this.handleChange}
          values={values}
        />
      );
  }
  }
}

export default UserAccount ;