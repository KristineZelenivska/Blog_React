import React, { Component } from 'react';
import PostCard from '../postCard/postCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Forward from '../Link/Link.js';
import noPostImage from '../../Assets/why.png';
// import './showPosts.css';
import './showPosts.sass';

class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="Posts">
        {posts.length !== 0 ? (
          posts.map((post, i) => (
            <PostCard key={i} author={post.author} date={post.date} text={post.text} id={post.id} />
          ))
        ) : (
          <div>
            <h1 className="Posts_No_Posts">
              You want to see something,
              <br />
              but you added nothing!
              <br />
              <img className="No_Post_Image" src={noPostImage} alt="There is no posts" />
            </h1>
            <div className="PostCard__link">
              <Link to="/forms" className="post__child__link">
                Finally add post!
              </Link>
            </div>
            <div className="PostCard__link">
              <Link to="/" className="post__child__link">
                Take me Home!
              </Link>
            </div>
            <div className="PostCard__link">
              <Link to="/other" className="post__child__link">
                Go to Other Form!
              </Link>
            </div>
          </div>
        )}
        {posts.length !== 0 && <Forward />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    // text: state.form.text,
  };
};

export default connect(mapStateToProps)(Posts);
