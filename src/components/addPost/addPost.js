import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './addPost.css';

class addPost extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      date: '',
      text: '',
    };
  }

  componentDidMount() {
    console.log('1) did mount');
  }

  static getDerivedStateFromProps(props, state) {
    // initial state of components
    console.log('2) get derived');

    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('4) got snapshot');
    return prevState;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('3) Should update?');
    return nextState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('5) Did update');
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); // e is event which is onInputChange and target is the stuff we give it inside(the info)
  };

  // shouldComponentUpdate(){      //
  // console.log('should update')
  // return true;
  // }

  render() {
    // const { onLogin } = this.props;

    // const { email, password } = this.state;

    return (
      <div className="Form">
        <div className="Form__content">
          <h1 className="Form__title">We want to know, what you think!</h1>
          <form>
            <div className="form-group">
              <label>Author</label>
              <input />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input />
            </div>
            <div className="form-group">
              <label>Your text here:</label>
              <input />
            </div>
            <div className="Form__button">
              <Button>Add</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default addPost;
