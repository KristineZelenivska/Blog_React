import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import "./addPost.css";

class addPost extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      date: "",
      text: ""
    };
  }

  componentDidMount() {
    console.log("1) did mount");
  }

  static getDerivedStateFromProps(props, state) {
    //initial state of components
    console.log("2) get derived");

    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("4) got snapshot");
    return prevState;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("3) Should update?");
    return nextState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("5) Did update");
  }

  onInputChange = e => {
    console.log(1111, e.target.value)
    console.log(2222, e.target.name)
    this.setState({ [e.target.name]: e.target.value }); //e is event which is onInputChange and target is the stuff we give it inside(the info)
  };

  onAdd = () => {
    console.log('button clicked')
  }

  // shouldComponentUpdate(){      //
  // console.log('should update')
  // return true;
  // }

  render() {
    // const { onAdd } = this.props;

    // const { email, password } = this.state;

    return (
      <div className="Form">
        <div className="Form__content">
          <h1 className="Form__title">Tell us,<br/> what's on your mind!</h1>
          <form>
            <div className="form-group">
              <label>Author</label>
              <input
                onChange={this.onInputChange}
                // name="email"
                className="form-control"
                type="author"
                // value={email}
              />
             
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
               onChange={this.onInputChange}
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
                onChange={this.onInputChange}
                // name="password"
                className="form-control"
                type="textarea"
                name="text"
                // type="password"
                // value={password}
              />
            </div>
            <div className="Form__button">
              <Button
                type="button"
                onClick={() => this.onAdd()}
                color="primary"
              >
                Add
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default addPost;
