import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import './app.sass';
import './app.css';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className="Homepage__body">
          <div>
            <h1 className="Homepage__title">Welcome to homepage</h1>
            <div className="Homepage__link">
              <Link to="/forms" className="Homepage__child__link">
                Create new post
              </Link>
            </div>
            <div className="Homepage__link">
              <Link to="/posts" className="Homepage__child__link">
                Show existing posts
              </Link>
            </div>
            <div className="Homepage__link">
              <Link to="/other" className="Homepage__child__link">
                Go to other form!
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
