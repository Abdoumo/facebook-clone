import { Avatar } from '@mui/material'
import {React , useState}  from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import './MessageSender.css'

function MessageSender() {
    const [input , setInput] = useState('')
    const [Img , setImage] = useState('')
    const handelSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='MessageSender'>
        <div className='MessageSender__top'>
            <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Old_woman_in_Kyrgyzstan%2C_2010.jpg/800px-Old_woman_in_Kyrgyzstan%2C_2010.jpg'/>
            <form>
            <input 
            value={input}
            onChange = {(e) => setInput(e.target.value)} 
                
                type="text" className='MessageSender__input' placeholder="What's in your mind"/>
                <input
                value={Img}
                onChange={(e) => setImage(e.target.value)} 
                
                type="text" className='MessageSender__image' placeholder="image url (optional)"/>
                <button onClick={handelSubmit} type='submit'>Hidden submit</button>
            </form>
        </div>
        <div className='MessageSender__bottom'>
            <div className='messageSender__option'>
               <VideocamIcon style = {{color:"red"}}/>
               <h3>Live Video</h3>  
            </div>
            <div className='messageSender__option'>
               <PhotoLibraryIcon style = {{color:"green"}}/>
               <h3>Picture/Video</h3>  
            </div>
            <div className='messageSender__option'>
               <InsertEmoticonIcon style = {{color:"orange"}}/>
               <h3>Emotion/Activity</h3>  
            </div>
        </div>
    </div>
  )
}

export default MessageSender