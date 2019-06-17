import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onTextChange, onTextEdit, onAuthorChange, onDateChange } from '../../redux/actions/postActions.js';
import { toast } from 'react-toastify';
import './editPost.sass';

const actionToProps = (dispatch) => ({
  actions: bindActionCreators({ onTextChange, onTextEdit, onAuthorChange, onDateChange }, dispatch),
});

const mapStateToProps = (state) => ({
  text: state.form.text,
  posts: state.posts,
});

class EditPost extends Component {
  authorChange = (e) => this.props.actions.onAuthorChange(e.target.value);

  dateChange = (e) => this.props.actions.onDateChange(e.target.value);

  textChange = (e) => {
    this.props.actions.onTextChange(e.target.value);
  };

  onEdit = () => {
    const { text } = this.props;
    this.props.actions.onTextEdit(text);
    this.props.saveText(text);
    toast.success('Successfully edited!', {
      className: 'toast_body_edit',
      position: 'top-center',
      autoClose: 3000,
    });
  };

  render() {
    return (
      <form>
        <div>
          <input
            onChange={this.textChange}
            className="form-control"
            type="textarea"
            name="text"
            defaultValue={this.props.text}
          />
        </div>
        <div className="Form__button">
          <Button type="button" onClick={this.onEdit} color="info">
            Edit
          </Button>
        </div>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  actionToProps,
)(EditPost);
