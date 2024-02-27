import React, { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantsMenu";
import TranslationEngToTamil from "./components/TranslationEngToTam/TranslationEngToTam";
import ShimmerUI from "./components/Shimmer-UI";
import UserContext from "./utlis/UserContext";
import { Provider } from "react-redux";
import appStore from "./Redux/AppStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
// import Grocery from "./components/Grocery";


const Grocery =lazy(() => import("./components/Grocery"))
 
const Applayout =()=>{
    const [userName, setuserName] =useState();
    useEffect(() =>{

        const data ={
            name:"Username",
        };
        setuserName(data.name);
    },[])
    return(
        <Provider store={appStore}>
          <UserContext.Provider  value={{loggedInUser: userName, setuserName}}>     
        <div>
            <Header />
            {/* <TranslationEngToTamil /> */}
            <Outlet />
            <Footer />
        </div>
        </UserContext.Provider> 
        </Provider>
    )
};

const appProvider =createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/cart",
                element:<Cart />
            },
            {
                path:"/restaurents/:resId",
                element:<RestaurantMenu />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1> }> <Grocery /></Suspense>
            }

        ],
        errorElement:<Error />
    }
])
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appProvider} />);

























// const hero= React.createElement("div",{id:"img"},[React.createElement("img",{id:"img",src:"https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg"},null )]);
// const heroroot =ReactDOM.createRoot(document.getElementById("hero"));
// heroroot.render(hero);
 