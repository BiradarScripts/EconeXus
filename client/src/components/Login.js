import React,{useState} from 'react' 
import {
    Link,
    useNavigate
  } from "react-router-dom";


export default function Login() {

   let navigate=useNavigate();
   const [credential,setCredential]=useState({email:"",password:""})

   const handleSubmit=async (e)=>{
      e.preventDefault();
      console.log("login")
      const response = await fetch(`http://localhost:8080/apis/auth/login`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },  
          body: JSON.stringify({email:credential.email,password:credential.password}),  
        });
      
      const json=await response.json(); 
      console.log(json)
      if(json.Success){
          localStorage.setItem('token', json.authToken);
          localStorage.setItem('id',json.id);
          navigate('/')
      }
      else{
          alert("invalid credentials")
      }
  }

  const onChange=(e)=>{
   setCredential({...credential,[e.target.name]:e.target.value}) 
}

  return (
    <div>
        <div className="logincontent">
         <div className="text">
            Login Form
         </div>

         <form onSubmit={handleSubmit}>
            <div className="field">
               <input type="email" onChange={onChange} placeholder="email address"className="form-control" value={credential.email}id="email" name="email" aria-describedby="emailHelp"/>
            </div>
            <div className="field">
               <input type="password" onChange={onChange} placeholder="password"name="password" value={credential.password}className="form-control" id="password"/>
            </div>
            <button>Sign in</button>
            <div className="sign-up">
               
               Not a member? <Link to="/SignUp">Signup now</Link>
            </div>
         </form>
      </div>
    </div>
  )
}