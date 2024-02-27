import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/CartSlice";
import CartList from "./CartList";

const Cart =() =>{
   const dispatch =useDispatch();
   const handleCart =() =>{
      dispatch(clearCart());
   }

   const cartitem =useSelector((store) =>store.cart.items);
   console.log(cartitem);
 return (
   <div className="w-full h-screen bg-[#F3F8FF]">
 <div className="w-9/12 m-auto ">
 <div className="flex flex-col justify-center">
    <h1 className="font-bold  text-xl text-center my-10 ">Cart</h1>
    <button className="  p-4 w-5/12 m-auto text-white rounded-lg  bg-black" onClick={handleCart}>Clear-Cart</button>
    {cartitem.length == 0 &&<div>
    <h1 className="font-bold mt-12 text-4xl text-center ">Your Cart is Empty</h1>
    <h2 className="font-bold mt-6 text-2xl text-center ">Please Add item To Your Cart</h2>
    </div>}
    </div>
    <div className="w-6/12 m-auto">
    <CartList  items={cartitem}/>
    </div>
 </div>
 </div>)
}
export default Cart;