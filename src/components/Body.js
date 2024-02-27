import { useState } from "react";
import { useEffect, useContext } from "react";
import useOnlineStatus from "../utlis/useOnlineStatus";
import RestaurantCard,{promotedCards} from "./RestaurantCard";
import { Link } from "react-router-dom";
import UserContext from "../utlis/UserContext";
import ShimmerUI from "./Shimmer-UI";
import Hero from "./Hero";
const Body=() => {
    const [listOfRestaurants, setlistOfRestaurants] =useState([]);
    const [FilteredList, setFilteredList]=useState([]);
    const [SearchText, setSearchText] = useState(" ");
    const  OnlineStatus =useOnlineStatus();
     

    const RestaurantPromotedCard =promotedCards(RestaurantCard);
    

    useEffect(() =>{
        // console.log("useEffect");
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data =await fetch("https://corsproxy.org/?"+encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
        const res =await data.json();
        // console.log(res.data );
        

        setlistOfRestaurants(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }



    const {loggedInUser, setuserName} =useContext(UserContext);
    
if(OnlineStatus === false){
    return (<div>
           <h1>Look's like you're offline </h1>
           <h2>please check your internet connection</h2>
    </div>)

    
}
if(listOfRestaurants === 0)  return <ShimmerUI />;

    return   (
        <div className="bg-[#E26EE5]">
        <div>
            <Hero />
        </div>
        <div className="flex flex-col w-4/5  m-auto justify-center   ">
            <div className="flex flex-col lg:flex-row justify-evenly    bg-[#F0ECE5] p-4 mt-10">
            <div className="flex justify-start items-center flex-wrap mb-5  md:justify-center  gap-4 lg:justify-center">
             
                <input className="border border-solid border-black bg-gray-300 w-6/12 md:6/12  p-4 rounded-md lg:w-8/12" type="text" value={SearchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className=" bg-black text-white px-4 py-3 rounded-md" onClick={ ()=>{
                  const filteredList =  listOfRestaurants.filter(
                    (res) =>res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                  );
                  setFilteredList(filteredList);

                }
                }>Search</button>
                 
                 
                </div>
                <div className="flex flex-wrap justify-start items-start mt-4 gap-5  md:justify-center lg:justify-around   lg:my-0">
                <button className="border border-solid border-black bg-yellow-200 rounded px-4 py-3" onClick={()=>{
                    const FilteredList =listOfRestaurants.filter(
                        (res) => res.info.avgRating> 4.5
                    )
                    setFilteredList(FilteredList);
                }}>Top-Rated</button>
                <button className="border border-solid border-black bg-yellow-200 rounded-lg px-4 py-3" onClick={()=>{
                    const FilteredList =listOfRestaurants.filter(
                        (res) => res.info.veg === true
                    )
                    setFilteredList(FilteredList);
                }}>Pure-veg</button>
                <button className="border border-solid bg-yellow-200 rounded-lg border-black px-4 py-3" onClick={()=>{
                    const FilteredList =listOfRestaurants.filter(
                        (res) => res.info.veg !== true
                    )
                    setFilteredList(FilteredList);
                }}>Non-veg</button>
                </div>
            </div>
            <div className="w-full flex flex-row    mx-auto my-5 bg-[#f0f0f0] flex-wrap p-6 lg:p-8 justify-around  ">
            {FilteredList?.map((restaurant)=> (
                   <Link key={restaurant.info.id} to={"/restaurents/"+restaurant.info.id}> 
                   {restaurant.info.veg ? (<RestaurantPromotedCard resData={restaurant} />) : (<RestaurantCard   resData={restaurant} />)}
                    </Link>
                ))}
            </div>
        </div>

        </div>
    )
}

export default Body;