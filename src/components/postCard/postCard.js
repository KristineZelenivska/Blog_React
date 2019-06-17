import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onTextChange, onTextEdit, deletePost } from '../../redux/actions/postActions.js';
import { toast } from 'react-toastify';
import './postCard.sass';

const actionToProps = (dispatch) => ({
  actions: bindActionCreators({ onTextChange, onTextEdit, deletePost }, dispatch),
});

const mapStateToProps = (state) => ({
  newText: state.forms.text,
});

class PostCard extends Component {
  state = {
    edit: false,
  };

  textChange = (e) => this.props.actions.onTextChange(e.target.value);

  editText = () => this.setState({ edit: !this.state.edit });

  onDeletePost = (id) => {
    this.props.actions.deletePost(id);
    toast.warn('Post deleted', {
      className: 'toast_body_edit',
      position: 'top-center',
      autoClose: 3000,
    });
  };

  onSave = (id, newText) => {
    this.props.actions.onTextEdit(id, newText);
    toast.success('Successfully edited!', {
      className: 'toast_body_edit',
      position: 'top-center',
      autoClose: 3000,
    });
    this.setState({ edit: !this.state.edit });
  };

  render() {
    const { author, date, text, id, newText } = this.props;
    return (
      <Card className="PostCard__card">
        <CardBody className="Postcard__body">
          <CardTitle className="PostCard__title">
            Created by:
            {author}
          </CardTitle>
          <CardSubtitle className="PostCard__date">
            Created on:
            {date}
          </CardSubtitle>
          {!this.state.edit ? (
            <CardText className="PostCard__text">"{text}"</CardText>
          ) : (
            <input onChange={this.textChange} className="form-control" type="textarea" name="text" />
          )}
          <div className="Group__button">
            {!this.state.edit ? (
              <div className="Edit__button">
                <Button type="button" color="primary" onClick={this.editText}>
                  Edit text
                </Button>
              </div>
            ) : (
              <div className="Edit__button">
                <Button type="button" color="primary" onClick={() => this.onSave(id, newText)}>
                  Save
                </Button>
              </div>
            )}
            <div className="Delete__button">
              <Button color="primary" type="button" onClick={() => this.onDeletePost(id)}>
                Delete
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default connect(
  mapStateToProps,
  actionToProps,
)(PostCard);
