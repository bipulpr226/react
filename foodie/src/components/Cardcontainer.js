 import Restaurantcard from "./Restaurantcard";
 import { restaurantList } from "../const/config";
 import {useState} from 'react'


 const Cardcontainer = () =>{
const [restaurantData, setRestaurantData]=useState(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//let text="";



  console.log("restaurantList", restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

//  setRestaurantData(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

const filterRestaurants=()=>{
 const restaurants=restaurantData.filter((restaurant)=>{
  return(
restaurant?.info?.avgRating>=4.5
  )
})
setRestaurantData(restaurants);
}

    return(
      <>
        {/* <input type="text" onChange={(e)=>{text=e.target.value;
          console.log("text",text)
        }}/> */}
   <button  class="button" onClick={filterRestaurants}>Top Rated Restaurants</button>
   
<div className="container d-flex flex-wrap gap-5">


{restaurantData.map((restaurant)=>{
return(

  <Restaurantcard 
  key={restaurant?.info?.id}
  //  imgUrl={IMG_URL+restaurant?.info?.cloudinaryImageId}
  // title={restaurant?.info?.name}
  // starRating={restaurant?.info?.starRating}
  // deliveryTime={restaurant?.info?.sla?.deliveryTime}
  // cuisines={restaurant?.info?.cuisines.join(",")}
  // location={restaurant?.info?.areaName}
  {...restaurant?.info}
  />
);
  
 })}</div>

      </>
      
      
   
      
    );
  };

  export default Cardcontainer;
 

