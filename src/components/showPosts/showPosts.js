import React, { Component } from 'react';
import PostCard from '../postCard/postCard'
import { connect } from 'react-redux';
import './showPosts.css'

class Posts extends Component {
    render(){
        console.log(11111, this.props)
        console.log(2222233333, this.state)
        return(
            <div className="Posts">
                {/* {this.props.posts && this.props.posts.map((post, i) => ( */}
             {this.props.posts && this.props.posts.map((post, i) => (
                    <PostCard
                        key={`postCard${i}`}
                        author={post[0]}
                        date={post.date}
                        text={post.text}
                         />
                

                    ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //this is the STORE //данные из store
    return {
        posts: state.posts
    //   author: state.posts[0], //updated to our props
    //   date: state.posts[1],
    //   text: state.posts[2]
    };
  };
  

export default connect(mapStateToProps)(Posts)