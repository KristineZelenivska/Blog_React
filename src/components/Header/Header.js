import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../addPost/addPost.js';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './Header.sass';

export default class Example extends React.Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/">Home</Link>
        </NavbarBrand>
        <div className="Other__link">
          <NavItem>
            <NavLink href="/Form/">Components</NavLink>
          </NavItem>
          {/* </div>
            <div className="Other__link"> */}
          <Link to="/" className="other__child__link">
            Take me Home!
          </Link>
          {/* </div>
            <div className="Other__link"> */}
          <Link to="/forms" className="other__child__link">
            Create new post!
          </Link>
        </div>
      </Navbar>
    );
  }
}
