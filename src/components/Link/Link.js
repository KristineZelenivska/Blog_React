import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Link.css';
import './link.sass';

class Forward extends Component {
  render() {
    return (
      <div className="Link__body">
        <div className="link">
          <Link to="/forms" className="child__link">
            Add another post!
          </Link>
        </div>
        <div className="link">
          <Link to="/" className="child__link">
            Take me Home!
          </Link>
        </div>
        <div className="link">
          <Link to="/other" className="child__link">
            Go to Other Form!
          </Link>
        </div>
      </div>
    );
  }
}

export default Forward;
