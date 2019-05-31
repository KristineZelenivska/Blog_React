import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__title">Bootcamp title</div>
        <Button color="dark">Upload</Button>
      </div>
    );
  }
}

export default Header;
