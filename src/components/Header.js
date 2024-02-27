import { LOGO_URL } from '../utlis/constant';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utlis/useOnlineStatus';
import UserContext from '../utlis/UserContext';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import style from "./Header.module.css"

const Header=()=>{
    // Modal FUnctions 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [username,setUsername] = useState("");
    const [logUser,setLogUser] = useState("")

    const [usernameError,setUsernameError] = useState(false)

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setUsernameError(false);
  };
  const handleChange =(e)=>{
    // console.log("Event",e);
    setUsername(e.target.value);
  }
  const handleLogin =()=>{
    if(!username.trim()){
        setUsernameError(true);
        return;
    }
    setLogUser(username);
    setbtnName("Logout")
    setModalIsOpen(false);
  }
    const [btnName, setbtnName] =useState("Login");
    const {loggedInUser} = useContext(UserContext);
    // console.log(UserContext);
    const cartItems =useSelector((store) => store.cart.items);
     
    
    const OnlineStatus =useOnlineStatus();
    return (
        <div className="  flex justify-between align-middle shadow-md bg-[#F3F8FF] mb-2 ">
            <div className="header-logo">
                 <img className="w-20" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className='flex  items-center p-4 m-4'>
                    <li className='px-4 hidden sm:block   animate-bounce'> {OnlineStatus ? "🟢" :"🔴"}</li>
                    <li className='px-4 hidden sm:block hover:text-yellow-200 '><Link to="/">Home</Link></li>
                    <li className='px-4 hidden sm:block hover:text-yellow-200'><Link to="/about">About</Link></li>
                    <li className='px-4 hidden sm:block hover:text-yellow-200'><Link  to="/contact">Contact</Link></li>
                    <li className='px-4 hidden sm:block hover:text-yellow-200'><Link to={"/grocery"} >Grocery</Link></li>

                </ul>
            </div>
            <div className="flex items-center">
             
                <ul className='flex p-4 m-4'>

                    <li className="px-4"><Link to={"/cart"}>Cart-({cartItems.length})</Link> </li>
                     

                    <li className="px-4"><button href="cart" onClick={
                        () =>{
                            // btnName ==="Login" ?  setModalIsOpen(true):setbtnName("Logout") ;
                            if(btnName==="Login"){
                                setModalIsOpen(true);
                            }
                            else{
                                setbtnName("Login")
                                setUsername("");
                                setLogUser("");
                                setUsernameError(false);
                            }
                        }
                    }>{btnName}</button></li>
                    <li className='font-bold'>{logUser}</li>

                </ul>
            </div>
             
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={style.modal}
    
      >
      <div className="font-bold text-3xl my-7 "> LOGIN </div>
            <div onClick={()=>setModalIsOpen(false)} className={style.cross}>X</div>
        <div className= "flex flex-col gap-5 items-center">
            
            <div className="font-bold">
              {/* <label htmlFor='username'>Username</label>
              <br /> */}
              <input type='text' className='font-medium text p-4 border border-solid border-black w-full text-xl rounded-lg'  id='username' placeholder='Username: ' value={username} onChange={handleChange}/>
              <p className={`${style.error} ${usernameError?style.show:style.hide}`} >Please Input Username</p>
            </div>
             
            <div className="">
              {/* <label htmlFor='password'>Password</label>
              <br /> */}
              <input type='password' placeholder='Password:' className='font-medium p-4 w-full border border-solid border-black text-xl rounded-lg' id='password' />
            </div>
            <div className="w-6/12 border border-solid border-black text-center text-white bg-black p-2"
            onClick={handleLogin}>
                Login
            </div>
        </div>
        <button onClick={closeModal} className="mt-5 underline">Sign In Later</button>
      </Modal>

        </div>
    )
};
export default Header;