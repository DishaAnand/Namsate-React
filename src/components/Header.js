import { useState } from "react";

// const authenticateUser = ()=>{
//   return true
// }


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
        <li>Home</li>
        <li>contact us</li>
        <li>About</li>
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