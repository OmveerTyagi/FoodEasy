import React from "react"
class UserClass extends React.Component{
    constructor(props){
        console.log("Constructor is Called (Child)");
        super(props);
        this.state ={
             userInfo : {
                name :"Dummy",
                location:"China"

             },
        }
    }
    async componentDidMount(){
         const data =  await fetch("https://api.github.com/users/OmveerTyagi");
         const json =   await data.json();
         console.log(json);
         this.setState({
            userInfo : json
         })
    }

    render(){
        console.log("Render is Called (Child)");
        const {name , location, avatar_url  } = this.state.userInfo;
        // const {name, location, contact, email} = this.props;
        const {count, count2} =this.state;
        return (
            <div className="user-card">
            <img src={avatar_url}/>
             
            <ul>
                <li>name: {name} Class</li>
                <li>location: {location}</li>
                {/* <li>Contact:  {contact}</li>
                <li>email: {email}</li> */}
            </ul>
    
            </div>
        )

         
    }
     
}
export default UserClass;