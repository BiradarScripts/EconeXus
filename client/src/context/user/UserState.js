import React, { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {

    const host="http://localhost:8080"
    const n1 = [];
    const [users, setUsers] = useState(n1);
    const [currentUser,setCurrentUser]=useState(1)

    const getMatchedUser=async()=>{
        try{
            const response=await fetch(`${host}/apis/auth/getUsers/${localStorage.getItem('id')}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const data=await response.json();
            setUsers(data);
        }catch(err){
            console.log(err);
        }
    }

    const getCurrentUser=async()=>{
        try{
            const response=await fetch(`${host}/apis/auth/getUser/${localStorage.getItem('id')}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "auth-token":localStorage.getItem('token')
                },
            });
            const data=await response.json();
            setCurrentUser(data);
        }catch(err){
            console.log(err);
        }
    }

    const editUser=async(updateInterests)=>{
        try{
            const response=await fetch(`${host}/apis/auth/editUser/${localStorage.getItem('id')}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                    "auth-token":localStorage.getItem('token')
                },
                body:JSON.stringify({
                    interestsData:updateInterests.interests
                })
            });
            const data=await response.json();
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <UserContext.Provider value={{users,getMatchedUser,currentUser,getCurrentUser,editUser}}>
            {props.children}
        </UserContext.Provider>
    )

};

export default UserState;