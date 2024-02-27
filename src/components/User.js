import { useState } from "react";
const User = ({name, contact, location, email}) =>{
    const [count, setCount] =useState(0);
    const [count2] =useState("1");
    return (
        <div className="user-card">
        <button onClick={ ()=>{
            
            setCount(count +1);
            // console.log(count);
        }
        
        }>Count </button>
        <h1>{count}</h1>
        <h2>Count2= {count2}</h2>
        <ul>
             
            <li>name: {name}</li>
            <li>location: { location}</li>
            <li>Contact: {contact}</li>
            <li>email: {email}</li>
        </ul>

        </div>
    )
}

export default User;