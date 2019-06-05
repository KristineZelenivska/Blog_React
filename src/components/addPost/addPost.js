import React, { Component } from 'react';
import { Button, Input, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { addPost, onChange } from '../../redux/actions/postActions.js';
import { Link } from 'react-router-dom';

import './addPost.css';
// console.log(addPost())
class Form extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      date: '',
      text: '',
      show: false,
    };
  }

  // componentDidMount() {
  //   getPosts()
  //   console.log("1) did mount");
  // }

  // static getDerivedStateFromProps(props, state) {
  //   //initial state of components
  //   console.log("2) get derived");

  //   return state;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("4) got snapshot");
  //   return prevState;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("3) Should update?");
  //   return nextState;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("5) Did update");
  // }

  onAuthorChange = (e) => {
    this.setState({ author: e.target.value }); //e is event which is onInputChange and target is the stuff we give it inside(the info)
  };
  onDateChange = (e) => {
    this.setState({ date: e.target.value }); //e is event which is onInputChange and target is the stuff we give it inside(the info)
  };
  onTextChange = (e) => {
    this.setState({ text: e.target.value }); //e is event which is onInputChange and target is the stuff we give it inside(the info)
  };

  onAdd = () => {
    const { author, date, text } = this.state;
    // console.log(11111, author)
    // console.log(22222, date)
    // console.log(33333, text)
    // console.log('button clicked')
    // console.log(11111, this.state)
    addPost();
    // this.setState({...state, show: true})
  };

  // shouldComponentUpdate(){      //
  // console.log('should update')
  // return true;
  // }

  render() {
    const { posts } = this.props;

    return (
      <div className="Form">
        <div className="Form__content">
          <h1 className="Form__title">
            Tell us,
            <br /> what's on your mind!
          </h1>
          <form>
            <div className="form-group">
              <label>Author</label>
              <input
                onChange={this.onAuthorChange}
                // name="email"
                className="form-control"
                type="author"
                // value={email}
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                onChange={this.onDateChange}
                // name="password"
                className="form-control"
                type="date"
                // value= "2015-08-09"
                // value={password}
              />
            </div>
            <div className="form-group">
              <label>Your text here:</label>
              <Input
                onChange={this.onTextChange}
                // name="password"
                className="form-control"
                type="textarea"
                name="text"
                // type="password"
                // value={password}
              />
            </div>
            <div className="Form__button">
              <Button type="button" onClick={() => this.onAdd()} color="info">
                Add my thought!
              </Button>
            </div>

            <div className="Form__link">
              <Link to="/posts"> Check my posts</Link>
            </div>
          </form>
        </div>
        <div>
          <h1>{posts}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //this is the STORE //данные из store
  return {
    posts: state.posts, //updated to our props
  };
};
// const mapDispatchtoProps = { //it allows us get this method from props
//   getPosts
// }

// export default connect( mapStateToProps, mapDispatchtoProps
// )(addPost);

export default connect(mapStateToProps)(Form);
