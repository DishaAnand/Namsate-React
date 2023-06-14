import {useParams} from "react-router-dom";

const RestaurantMenu = () =>{
    const  params = useParams();
    const {resId } = params
    return (
        <div>
            <h1>restaurant id: {resId }</h1>
            <h2>Namaste</h2>
        </div>
    )
}

export default RestaurantMenu;