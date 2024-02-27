import { useDispatch } from "react-redux"
import { removeItem} from "../Redux/CartSlice";

 const CartList = ({items}) => {
  const dispatch =useDispatch();
  
     const handleRemoveItem=(item)=>{
      dispatch(removeItem(item));

     }

     
  return (
    <div>
     {items.map(item => ( 
        <div className='flex flex-wrap md:flex-nowrap justify-between border-b border-slate-300 m-2 ' >
        <div className='m-2 w-9/12 p-2'>
                <p className='font-semibold m-1'>{item.card.info.name}</p>
                <p className='m-1'>Rs. {(item.card.info.price || item.card.info.defaultPrice)/100}</p>  
            </div>
            <div className='m-2 w-3/12 md:w-2/12 text-center p-2'>
                <button   className=' p-2 m-2 bg-black text-white text-sm text-center rounded-md   hover:bg-green-600' onClick={()=>handleRemoveItem(item)}>Remove Item</button>
            </div>

        </div>
     ))}
      
    </div>
  )
}

export default CartList;