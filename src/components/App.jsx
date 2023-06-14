import  React from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "./Header";
//Named import
//import {title} from "./Header" //do like this when we are exporting directly from the header
//or import everything
// import * as Obj from "./Header";
// <Obj.Title/>
import Body from "./Body";
import Footer from "./Footer";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";


// const BiryaniCafe ={
//   name : "Biryani cafe",
//   image: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
//   cuisines: ["andhra","madurai biryani"],
//   rating: "4"
// }

// const RestroCard =(props) =>{
//   return (
//     <div className = "card">
//       <img src ={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
//     +props.restaurant.data?.cloudinaryImageId} />
//        <h2>{props.restaurant.data?.name}</h2>
//       <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
//       <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
//     </div>
//   )
// }


//doing destructuring 
// const RestroCard =({restaurant}) =>{

//   const{name,cuisines,lastMileTravelString,cloudinaryImageId} = restaurant.data
//   return (
//     <div className = "card">
//       <img src ={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
//     +cloudinaryImageId} />
//        <h2>{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h4>{lastMileTravelString} minutes</h4>
//     </div>
//   )
// }


const AppLayout = () => {
  return(
    <React.Fragment>
    <Header/>
    <Outlet/>
    <Footer/>

      </React.Fragment>

  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <AppLayout/>,
    errorElement : <Error/>,
    children: [
      {
        path: "/",
        element : <Body/>,
      },
      {
        path: "/about",
        element : <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  
  // {
  //   path: "/",
  //   element : <AppLayout/>
  // }
])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router = {appRouter} />)

