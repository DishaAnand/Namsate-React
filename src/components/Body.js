import { useState, useEffect } from 'react';
import { restroList, swiggyData } from './config';
import RestroCard from './RestroCard';
import ShimmerUI from './ShimmerUI';



function filterData(searchText, restro) {
  return restro.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))

}


const Body = () => {

  //const searchTxt = "kfc" //creating variable in js

  //searchText is a local state variable 
  const[allRestaurants, setallRestaurants] = useState([])
  const [searchText, setSearchText] = useState() //to create state variables, returns an array with first one as variable name and second is the setfunction      
  const [filteredrestro, setfileteredestro] = useState([])

  // empty dependency => once after every render

  useEffect(() => {
    getRestaurants();
  }, []) // if we dont want to call useeffect after every rerender, we use "dependency" array, callback is called after every rerender
  // if empty array is called that means useeffect is called only once

  const getRestaurants = () => {
    
    /*const data =fetch('https://api.jsonserve.com/AdKsJL', {
      //"mode": "no-cors"
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(res => console.log(res)) */
    setTimeout (function(){
      setallRestaurants(swiggyData?.data?.cards?.[2]?.data?.data?.cards)
      setfileteredestro(swiggyData?.data?.cards?.[2]?.data?.data?.cards)
    },2000)
  }

//Conditional Rendering
//if rest is empty then shimmer ui else normal ui


//not render components(early return)
  if(!setallRestaurants) return null

  if(filteredrestro?.length ===0) return <h2>No restaurants found</h2>

  return allRestaurants?.length ===0 ?(
  <ShimmerUI/>):
  (
    <>
      <div className="searchContainer">
        <input type="text" className="search" placeholder="Search" value={searchText}
          onChange={(e) => {
            //searchText = e.target.value; //cannot directly modify it like this in react
            setSearchText(e.target.value)
          }

          } />
        <button className="search-btn"
          onClick={() => {
            //need to filter the data, passing "restro" in searchtext so that on click of search button it shld filter restro
            const data = filterData(searchText, allRestaurants)
            //update the state

            setfileteredestro(data);
          }}

        >Search</button>
      </div>
      <div className="rest">
        
          
          
          {filteredrestro.map((restaurant) => {
            return <  RestroCard {...restaurant.data} key={restaurant.data.id} />
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

export default Body
