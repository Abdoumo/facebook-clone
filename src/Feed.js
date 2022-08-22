import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel.css/StoryReel.js'
import Post from './Post.js'


function Feed() {

  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender />
        <Post 
        
            profilePic={localStorage.getItem("profilePic")}
            message='Wow '
            timestamp='timetipe'
            username={localStorage.getItem("name")}
            image='https://www.programme-tv.net/imgre/fit/~1~tel~2022~08~01~032e9e3b-d564-41a8-85d2-959299de41e1.jpeg/1200x600/crop-from/top/quality/80/nos-coeurs-meurtris-le-nouveau-film-a-succes-de-netflix-aura-t-il-une-suite.jpg' 
        />
       
        
    </div>
  )
}

export default Feed