import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import {Link} from 'react-router-dom'
import {getPosts} from '../../redux/actions/postActions.js'
import './postCard.css'

class PostCard extends Component {
    // componentDidMount() {
    //     getPosts()
    //     console.log(111111, this.props);
    //   }
        render(){
        console.log(222222, this.props)

        const {author, date, text} = this.props
        return(
            <Card className="PostCard mb-5">
                <CardBody>
                    <CardTitle className="PostCard__card-title">{author}</CardTitle>
                    <CardSubtitle className="PostCard__date">{date}</CardSubtitle>
                    <CardText className="PostCard__username"> {text} </CardText>
                </CardBody>
                <div className="PostCard__link"><Link to="/forms"> Add another post!</Link></div>
            </Card>
        )
    }
}

export default PostCard