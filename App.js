import  React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const heading  = (        // variable calling in braces
//   <h1 id = "title" key = "h2">
//     namaste React
//   </h1> 
// )


// const HeaderComponent = () =>{
//   return (
//   <div> 
//     {heading}
//     {/* <headings />
//     <h1>functional components</h1>
//     <h2>this is heading</h2> */}
//   </div>
//   );
// };
const Headers = ()=>{
  return (
    <div className="headers">
      <img className = "logo" src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6" alt="Logo"/>
      <input type ="text" placeholder="Search.."></input>
      <img className = "user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="User Logo" />
    </div>
    
  )
  
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Headers />)

