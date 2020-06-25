import React from 'react'
// import FontAwesome from 'react-fontawesome'
import './SocialCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

function CardContent({description, likes,comments}) {
    return (
        <div className="card-body">
            <div class="social-meta">
                <p>{description} </p>
                <p className="comment-font"><FontAwesomeIcon icon={faHeart}/>  {likes} likes </p>
                <p className="comment-font"><FontAwesomeIcon icon={faComment}/>  {comments} comments</p>
            </div>
          <div class="comment-form">
            <i><FontAwesomeIcon icon={faHeart}/></i>
            <input placeholder="Add Comment..." type="text" id="input1" class="form-control comment"/>
          </div>
        </div>
    )
}

export default CardContent
