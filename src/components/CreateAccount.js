import React, { Component } from 'react';

class CreateAccount extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="page-section">
				<h2 className="h3 m-2">Step 1 - Create Account</h2>
				<input type="text" className="form-control m-2 p-4" onChange={handleChange('firstName')} value={values.firstName} placeholder="Enter Your First Name" />
				<input type="text" className="form-control m-2 p-4" onChange={handleChange('lastName')} value={values.lastName} placeholder="Enter Your Last Name" />
				<input type="text" className="form-control m-2 p-4" onChange={handleChange('email')} value={values.email} placeholder="Enter Your Email" />
        <button className="btn btn-primary m-2" onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default CreateAccount ;