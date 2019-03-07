import React, { Component } from 'react';

class SocialDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="page-section">
				<h2 className="h3 m-2">Step 2 - Social Details</h2>
				<input type="text" className="form-control m-2 p-4" onChange={handleChange('facebook')} value={values.facebook} placeholder="Enter Your Facebook Username" />
				<input type="text" className="form-control m-2 p-4" onChange={handleChange('twitter')} value={values.twitter} placeholder="Enter Your Twitter Username" />
				<input type="text" className="form-control m-2 p-4" onChange={handleChange('linkedin')} value={values.linkedin} placeholder="Enter Your Linkedin Username" />
        <button className="btn btn-secondary m-2" onClick={this.back}>Back</button>
        <button className="btn btn-primary m-2" onClick={this.continue}>Confirm</button>
      </div>
    );
  }
}

export default SocialDetails;