import React, { PureComponent, Fragment } from 'react';
import Forms from '../components/addPost/addPost';
import Header from '~/components/Header/Header';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <div>
          <Header />
        </div>

        <div>
          <Forms />
        </div>
      </Fragment>
    );
  }
}

export default App;
