import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import React from 'react';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import SidebarRow from './SidebarRow';
import './Sidebar.css'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StorefrontIcon from '@mui/icons-material/Storefront';

function Sidebar() {
   console.log(document.querySelector('ExpandMoreIcon'))
   // function dec() {
   //    localStorage.clear()
   //    // location = 'location.href'
   // }
  return (
    <div className='sidebar'>
    
        <SidebarRow src={localStorage.getItem("profilePic")} title={localStorage.getItem("name")}/>
         <SidebarRow 
            Icon = {LocalHospitalIcon}
            title="COVID 19 Information Center"
         />
         <SidebarRow 
            Icon = {EmojiFlagsIcon}
            title="Pages"
         />
         <SidebarRow 
            Icon = {PeopleIcon}
            title="Friends"
         />
         <SidebarRow 
            Icon = {VideoLibraryIcon}
            title="Videos"
         />
         <SidebarRow 
            Icon = {ChatIcon}
            title="Messanger"
         />
         <SidebarRow 
            Icon = {StorefrontIcon}
            title="Marketplace"
         />
         <SidebarRow 
            Icon = {ExpandMoreIcon}
         />
         
    </div>
  )
}

export default Sidebar