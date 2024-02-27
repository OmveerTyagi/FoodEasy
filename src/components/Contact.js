const Contact =() =>{
    return (
        <div >
        <div className="flex flex-col justify-center  mx-auto w-3/4 p-3 border border-solid border-black bg-slate-400 ">
            <h1 className="font-bold text-5xl my-4 mx-auto">Contact us</h1>
             <div className="  flex flex-col justify-center m-auto ">
                <form>
                <div className="flex flex-row justify-center  w-auto">
                    <input className="border border-solid border-black rounded-lg text-2xl p-2 hover:bg-gray-400" type="text" placeholder="Enter Your First Name"/><br/>
                    <input className="border border-solid border-black rounded-lg text-2xl p-2 hover:bg-gray-400" type="text" placeholder="Enter Your Last Name"/>
                    </div>
                    <br/>
                    <input className="border border-solid border-black rounded-lg text-2xl w-full my-4 p-2 hover:bg-gray-400"  type="email" placeholder="Enter Your Email Adress"/><br/>
                    <textarea className="border border-solid border-black rounded-lg text-2xl w-full my-4 p-2 hover:bg-gray-400" rows="10" column="10" placeholder="Enter Your Mesage"/><br/>
                    <button className="border border-solid border-black rounded-lg text-2xl p-3 hover:bg-orange-400 ">Send Message</button>
                </form>
             </div>
             </div>
        </div>
    )
}
export default Contact;