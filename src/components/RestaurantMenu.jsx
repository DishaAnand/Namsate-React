import {useParams} from "react-router-dom";

const RestaurantMenu = () =>{
    const  { id } = useParams();
   // const  = params
    return (
        <div>
            <h1>restaurant id: {id }</h1>
            <h2>Namaste</h2>
        </div>
    )
}

export default RestaurantMenu;