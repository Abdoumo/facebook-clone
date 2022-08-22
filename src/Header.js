import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'; 
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar , IconButton} from '@material-ui/core';
import  AddIcon  from '@material-ui/icons/Add';
import  Forum  from '@material-ui/icons/Forum';
import  NotificationsActiveIcon  from '@material-ui/icons/NotificationsActive';
import  ExpendMoreIcon  from '@material-ui/icons/ExpandMore';


function Header() {
    
            
          
  return (
    <div className='header'>
        <div className='header__left'>{/* LOGO */}
        <img src='https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Image.png' alt='Your internet not working well ?' />
        <div className='header__input'>
        <SearchIcon />
        <input type="text" placeholder='Search Facebook'/>
            </div>
        </div>
        <div className='header__center'>{/* ICONS IN MIDDEL */}
            <div className='header__options header__options--active'>
                <HomeIcon fontSize = "large"/>
            </div>
            <div className='header__options'>
                <FlagIcon fontSize = "large"/>
            </div>
            <div className='header__options'>
                <SubscriptionsIcon fontSize = "large"/>
            </div>
            <div className='header__options'>
                <StorefrontIcon fontSize = "large"/>
            </div>
            <div className='header__options'>
                <SupervisedUserCircleIcon fontSize = "large"/>
            </div>
        </div>
        <div className='header__info'>
            <div className='header__right'>{/* HEADER INFO PROFILE  + NAME */}
                <Avatar  src={localStorage.getItem("profilePic")}/> 
                <h4>{localStorage.getItem("name")}</h4>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <Forum />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpendMoreIcon />
                </IconButton>

            </div>
        </div>
    </div>
  )
}

export default Header