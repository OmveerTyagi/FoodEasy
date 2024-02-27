import React from 'react'
import { LOGO_URL } from '../utlis/constant';

const Footer = () => {
    const date=new Date().getFullYear();
  return (
    <div className='bg-[#49108B] shadow-inner text-xs sm:text-base w-auto'>
        <div className='w-8/12 mx-auto h-auto flex-wrap items-center text-white flex justify-around'>
        <div className='  m-5 p-1'>
            <div className='flex justify-start'>
                <img src={LOGO_URL} className=' h-10 sm:h-14'/>
                <span className=' text-center p-2 text-4xl font-bold'>FoodEasy</span>
            </div>
            <p className='font-semibold '> 
            Welcome to home of taste
            </p>  
            <p>Copyright @{date}.FoodEasy</p>  
            <p>Made By ✨ Omveer Tyagi</p> 
        </div>
        <div className='flex justify-between flex-wrap'>
        <div className='  p-2'>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2 '>
                    Quick-Links
                </li>
                <li className='m-2'>
                    About Us
                </li>
                <li className='m-2'>
                    Contact
                </li>
                <li className='m-2'>
                Grocery
                </li>
            </ul>
        </div>
        {/* <div className='w-[40%] md:w-[20%] p-2'>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2'>
                    Legal
                </li>
                <li className='m-2'>
                    Terms & Conditions
                </li>
                <li className='m-2'>
                    Privacy Policy
                </li>
                <li className='m-2'>
                    Cookie Policy
                </li>
            </ul>
        </div> */}
        <div className=' p-2'>
            <ul className='m-1 p-1'>
                <li className='font-semibold m-2'>
                    Contact Us
                </li>
                <li className='m-2'>
                   Agra UtterPrasesh
                </li>
                <li className='m-2'>
                    9999999999
                </li>
                <li className='m-2 '>
                    xyz@gmail.com
                </li>
            </ul>
        </div>
        </div>
    </div>


    </div>
      )
}

export default Footer;