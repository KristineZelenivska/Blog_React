import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost, onAuthorChange, onDateChange, onTextChange } from '../../redux/actions/postActions.js';
import { Link } from 'react-router-dom';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './addPost.sass';

toast.configure({
  pauseOnFocusLoss: false,
  transition: Zoom,
  position: toast.POSITION.BOTTOM_RIGHT,
  hideProgressBar: true,
  autoClose: 5000,
});

const actionToProps = (dispatch) => ({
  actions: bindActionCreators({ addPost, onAuthorChange, onDateChange, onTextChange }, dispatch),
});

const mapStateToProps = (state) => ({
  posts: state.forms,
});

class Form extends Component {
  // state = {
  //   author: '',
  //   date: '',
  //   text: '',
  // };
  // test = (e) => console.log({ [e.target.name]: e.target.value });
  authorChange = (e) => this.props.actions.onAuthorChange(e.target.value);

  dateChange = (e) => this.props.actions.onDateChange(e.target.value);

  textChange = (e) => this.props.actions.onTextChange(e.target.value);

  onAdd = () => {
    const { posts, actions } = this.props;

    if (posts.author && posts.date && posts.text) {
      const data = {
        id: Date.now(),
        ...posts,
      };
      actions.addPost(data);
      toast('Congrats! Your thought was added!', { className: 'toast_body' });
      toast(`Click "Check my posts" button to see it.`, { autoClose: 8000, className: 'toast_body' });
    } else {
      toast.error('Please, fill all fields', {
        className: 'toast_empty_body',
        position: 'bottom-center',
      });
    }
  };

  render() {
    const { posts } = this.props;
    return (
      <div>
        <div className="Form">
          <div className="Form__content">
            <h1 className="Form__title">
              Tell us,
              <br />
              what&apos;s on your mind!
            </h1>
            <form>
              <div>
                <label>Author</label>
                <input
                  onChange={this.authorChange}
                  className="form-control"
                  type="author"
                  name="author"
                  value={posts.author}
                />
              </div>
              <div>
                <label>Date</label>
                <input onChange={this.dateChange} className="form-control" type="date" name="date" value={posts.date} />
              </div>
              <div>
                <label>Your text here:</label>
                <input
                  onChange={this.textChange}
                  className="form-control"
                  type="textarea"
                  name="text"
                  value={posts.text}
                />
              </div>
              <div className="Form__button">
                <Button type="button" onClick={() => this.onAdd()} color="info">
                  Add my thought!
                </Button>
              </div>
              <div className="Form__link">
                <Link to="/posts" className="form__child__link">
                  Check my posts
                </Link>
                <Link to="/" className="form__child__link">
                  Take me Home!
                </Link>
                <Link to="/other" className="form__child__link">
                  Go to other form!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actionToProps,
)(Form);
