import { Button } from '@mui/material'
import React from 'react'
import { auth , provider } from './firebase'
import {signInWithPopup} from "firebase/auth";
import './login.css'

// function Login() {
//     const signIn = () => {
      
//           signInWithPopup(auth, provider)
//             .then((result) => {
//               const name = result.user.displayName;
//               const email = result.user.email;
//               const profilePic = result.user.photoURL;
//               console.log(result)
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//           };
//           // localStorage.setItem("name", name);
//           // localStorage.setItem("email", email);
//           // localStorage.setItem("profilePic", profilePic);

    
//   return (
//     <div className='Login'>
//         <div className='Login_logo'>
//              <img  src="https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Image.png" alt=''/>
//               <img src ="https://www.pngmart.com/files/3/Facebook-Logo-PNG-Pic.png" alt='' />        
//         </div>
//         <Button type="submit" onClick={signIn}  >
//             Sign In
//         </Button>

//     </div>
//   )
// }

// export default Login