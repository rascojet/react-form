import React, { Component } from 'react';

class Success extends Component {
  restart = e => {
    e.preventDefault();
    this.props.restartOver();
  };

  render() {
    return (
      <div className="page-section">
        <h3>Thank You!</h3>
        <p>We will get back to you soon.</p>
        <button className="btn btn-success" onClick={this.restart}>Back</button>
      </div>
    );
  }
}

export default Success ;