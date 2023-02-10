import { useState } from 'react';
import {restroList} from './config';
import RestroCard from './RestroCard';


function filterData(searchText,restro){
  return restro.filter((restaurant) =>restaurant.data.name.includes(searchText))

}

const Body =() => {

  //const searchTxt = "kfc" //creating variable in js

  //searchText is a local state variable 
  const  [searchText,setSearchText] = useState() //to create state variables, returns an array with first one as variable name and second is the setfunction      
  const [restro,setrestro] = useState(restroList)

  return (
    <>
    <div className = "searchContainer">
      <input type = "text" className = "search" placeholder = "Search" value = {searchText}
      onChange={(e) =>{
        //searchText = e.target.value; //cannot directly modify it like this in react
        setSearchText(e.target.value)
      }

      } />
      <button className = "search-btn"
        onClick={()=>{
          //need to filter the data, passing "restro" in searchtext so that on click of search button it shld filter restro
           const data = filterData(searchText,restro)
           //update the state
           setrestro(data);
        }}
      
      >Search</button>

    </div>
    <div className = "rest">
      {
        //need to filter data and hence created a local variable nad put "restro" and used that in the map
        //so that now filter can be done 
        restro.map((restaurant) =>{
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