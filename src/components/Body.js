import { useState } from 'react';
import {restroList} from './config';
import RestroCard from './RestroCard';

const Body =() => {

  //const searchTxt = "kfc" //creating variable in js

  //searchText is a local state variable
  const  [searchText,setSearchText] = useState() //to create state variables

  return (
    <>
    <div className = "searchContainer">
      <input type = "text" className = "search" placeholder = "Search" value = {searchText}
      onChange={(e) =>{
        //searchText = e.target.value; //cannot directly modify it like this in react
        setSearchText(e.target.value)
      }

      } />
      <button className = "search-btn">Search</button>

    </div>
    <div className = "rest">
      {
        restroList.map((restaurant) =>{
          return <  RestroCard {...restaurant.data} key = {restaurant.data.id}/>
        })
      }

    {/* pass individual props */}
    {/* <RestroCard name = {restroList[0].data.name} cuisines = {restroList[0].data.cuisines}/> 
    <RestroCard name = {restroList[1].data.name} cuisines = {restroList[1].data.cuisines}/>
    <RestroCard name = {restroList[2].data.name} cuisines = {restroList[2].data.cuisines}/>
    <RestroCard name = {restroList[3].data.name} cuisines = {restroList[3].data.cuisines}/> */}
    

    {/* <RestroCard {...restroList[0].data}/>
    <RestroCard {...restroList[1].data}/>
    <RestroCard {...restroList[2].data}/>
    <RestroCard {...restroList[3].data}/>  */}
  </div>
  </>
)
}

export default Body;