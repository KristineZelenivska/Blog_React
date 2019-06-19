import React, { Component } from 'react';
import OtherForm from './otherForm';

class OtherPage extends Component {
  onFormSubmit = (values) => {
    console.log(111, values);
  };

  render() {
    return <OtherForm onSubmit={this.onFormSubmit} />;
  }
}

export default OtherPage;
