 
import { useDispatch } from "react-redux"
import { addItem} from "../Redux/CartSlice";

 const ItemList = ({items}) => {
  const dispatch =useDispatch();
  
     const handleAddItem=(item)=>{
      dispatch(addItem(item));

     }

     
  return (
    <div>
     {items.map(item => ( 
        <div className='flex flex-wrap md:flex-nowrap justify-between border-b border-slate-300 m-2 ' >
        <div className='m-2 w-9/12 p-2'>
                <p className='m-1 my-3 text-xs'>{item.card.info.isVeg ? "🟩 Veg" : "🟥 Non-Veg"}</p>
                <p className='font-semibold m-1'>{item.card.info.name}</p>
                <p className='m-1'>Rs. {(item.card.info.price || item.card.info.defaultPrice)/100}</p>
                <p className='text-gray-500 m-1 text-sm'>{item.card.info.description}</p>
            </div>
            <div className='m-2 w-3/12 md:w-2/12 text-center p-2'>
                 <img className='w-full  rounded-md' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.card.info.imageId}/>
                <button   className=' p-2 m-2 bg-black text-white text-sm text-center rounded-md   hover:bg-green-600' onClick={()=>handleAddItem(item)}>Add to cart</button>
                
            </div>

        </div>
     ))}
      
    </div>
  )
}

export default ItemList
