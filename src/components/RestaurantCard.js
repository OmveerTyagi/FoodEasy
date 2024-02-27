
import { CDN_URL } from "../utlis/constant";

const RestaurantCard =(props )=>{
    const {resData}=props;
    console.log(resData);
    const {name, cuisines, id, sla, costForTwo,avgRating,cloudinaryImageId,veg} = resData?.info;
    const truncatedCuisines = cuisines.slice(0,3);
    return (
        <div className="w-70 hover:shadow-xl">
        <div className="  my-6 p-4  w-64     rounded-lg bg-gray-300 hover:bg-white shadow-inner  ">
            <div className=" flex justify-center "> 
            <img className=" rounded-lg w-full  h-40  object-contain " src={CDN_URL + cloudinaryImageId}/>
            </div>
            <div className="res-dis h-40">
            <h3 className="font-bold my-3">{  name}</h3>
            <h5 className= " font-light">{  truncatedCuisines.join(", ")}</h5>
            <h4 className= " font-light">{  costForTwo} For Two</h4>
            <h5 className= " font-light">{ sla.deliveryTime}Mins</h5>
            <h5 className= " font-light">{  avgRating}Stars</h5>
            <h5>{ veg}</h5>

            </div>
        </div>
        </div>
    )
}

export const promotedCards = (RestaurantCard)=>{
    return (props) =>{
        return(
            <div>
                <label className=" absolute p-2 m-2 rounded-md bg-slate-800 text-white">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;