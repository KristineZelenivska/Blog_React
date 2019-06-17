import React, { Component } from 'react';
import form from '~/redux/reducers/form/index';

class ShowValues extends Component {
  render() {
    console.log(this.props);
    // data = (values) => {
    //   return JSON.stringify(values, null, 2);
    // };

    return (
      <div className="Link__body">
        <h1>{this.props.form}</h1>
      </div>
    );
  }
}

export default ShowValues;
