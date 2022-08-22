import React from 'react'
import './post.css'
import { Avatar} from '@material-ui/core';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Post({profilePic , image , username , timestamp , message}) {
  return (
    <div className='post'>
        <div>
            <div className='post__top'>
            
                <Avatar src={profilePic} className = 'post__avatar' />
                <div className='post__topInfo'>
                <h3>{username}</h3>
                <p>{timestamp}</p>
                </div>
            </div>
        </div>
        <div className='post__Bottom'><p> {message} </p></div>
        <div className='post__image'>
        <img src={image} alt='' />
        </div>
        <div className='post__options'>
            <div className='post__option'>
                <ThumbUpIcon />
                <p>Like</p>
            </div>
            <div className='post__option'>
                <ChatBubbleOutlineIcon />
                <p>Comment</p>
            </div>
            <div className='post__option'>
            <ShareIcon />
                <p>Share</p>
            </div>
            <div className='post__option'>
                 <AccountCircleIcon />
                <ExpandMoreIcon />
            </div>

        </div>
    </div>
  )
}

export default Post