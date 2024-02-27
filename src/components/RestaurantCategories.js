import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategories =({data, showItems, setShowIndex}) =>{
    const [showIcon, setShowIcon] = useState("🔽");

    const handleClick =() =>{
       setShowIndex();
       showIcon === "🔽" ? setShowIcon("🔼") : setShowIcon("🔽") ;
    }
     
    return(
        <div className="m-2 p-2 border border-solid border-b-gray-400 shadow-md " >
           <div className="flex justify-between m-2 p-3" onClick={handleClick}>
          <span className="font-bold text-xl ">{ data.title} ({data.itemCards.length})</span> 
          <span  > {showIcon}</span>
          </div>

          {showItems && <ItemList items={data.itemCards} />}

        </div>
    )

}


export default RestaurantCategories;
 