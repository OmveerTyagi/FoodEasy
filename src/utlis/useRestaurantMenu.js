import { useEffect, useState } from "react";
const useRestaurantMenu = (resId)=>{
    const [resInfo, setresInfo]=useState(null);
    console.log(resInfo)

    useEffect(() =>{
        FetchMenu();
  },[]);

  const FetchMenu = async () =>{

      const data = await fetch( "https://corsproxy.org/?"+encodeURIComponent(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`));
      const json=await data.json();
      // console.log(json.data);
      setresInfo(json.data);
  }
  return resInfo;

}

export default useRestaurantMenu;