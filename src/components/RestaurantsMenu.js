import { useState } from "react";
import ShimmerUI from "../components/Shimmer-UI";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import useRestaurantMenu from "../utlis/useRestaurantMenu";

 

const RestaurantMenu = () =>{
    const [showIndex, setShowIndex] = useState(null);
    
    const {resId} = useParams();
    // console.log(resInfo);
     
     const resInfo =useRestaurantMenu(resId);
     console.log(resInfo)
  
    

  if(resInfo === null)  return <ShimmerUI />;

   
 
  console.log(resInfo.cards[2].card.card.info);
  const categories =resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) =>c.card["card"]["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) 
   
    return(
        <div className="flex flex-col justify-center m-auto    w-3/5 ">
            <div className="flex justify-between px-5 shadow-xl bg-blue-200 text-white">
            <div>
             <h1 className="font-bold text-4xl mt-5 mb-2">{resInfo.cards[2].card.card.info.name}</h1>
             <h2  className=" font-medium text-xl mb-2">{resInfo.cards[2].card.card.info.cuisines.join(", ")} - { resInfo.cards[2].card.card.info.sla.slaString} </h2>
             <h3 className=" font-medium text-xl mb-2" >{resInfo.cards[2].card.card.info.costForTwoMessage}</h3>
             <h3 className=" font-medium text-xl mb-2">{resInfo.cards[2].card.card.info.avgRatingString} ⭐</h3>
             <h3 className=" font-medium text-xl mb-2">{resInfo.cards[2].card.card.info.totalRatingsString}</h3>
             </div>
             <div>
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ resInfo.cards[2].card.card.info.cloudinaryImageId} className="m-4 h-7/12"/>
             </div>

              </div>
              
              {categories.map((category,index)=>{
                 return(
                    <RestaurantCategories key={category?.card?.card.title} data={ category?.card?.card}
                    showItems={index===showIndex ? true :false} setShowIndex={()=>index===showIndex ? setShowIndex() : setShowIndex(index)}    />
                )
            })}
                 
        </div>
    )
}
export default RestaurantMenu;


// showItems={index===showIndex ? true :false} setShowIndex={()=>index===showIndex ? setShowIndex() : setShowIndex(index)} 