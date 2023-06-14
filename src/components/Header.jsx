import { useState } from "react";
import {Link} from "react-router-dom";

//import Logo from '../assets/img/food.jpg';

// const authenticateUser = ()=>{
//   return true
// }


// const Title = () =>(
//   <a href="/">
//     <img
//       classNmae = "Logo"
//       alt = "logo"
//       src = {Logo}
//     />
//   </a> 
// )

const Title  = ()=>(    
  <a href="/">    
    <img className="logo"
    alt ="logo" src = "https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"/>
  </a>
)


const Header = () =>{

  const[logginUser,setlogginUser] = useState(false)

  return (
  <div className = "header"> 
    <Title />


    <div className="nav-items">
      <ul>
        <Link to ="/">
          <li>Home</li>
        </Link>
        <Link to = "/about">
          <li>About</li>
        </Link>
        <Link to = "/contact">
          <li>contact us</li>
        </Link>
        
        <li>Cart</li>
      </ul>
    </div>
    {
      logginUser?
      <button onClick = {()=> setlogginUser(false)}>Logout</button>
      :
      <button onClick={()=>setlogginUser(true)}>Login</button>
    }


    
  </div>
  );
};

export default Header;