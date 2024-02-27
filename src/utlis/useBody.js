import { useEffect, useState } from "react";

 
const useBody = () =>{
    const [resInfo, setresInfo] =useState(null);

    useEffect( () =>{
        fetchData();
    })
    const fetchData = async () =>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const res =await data.json();
        setresInfo(res.data);
    }

    return  resInfo;

}

export default useBody;