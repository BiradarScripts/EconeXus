import React, { useEffect,useContext,useState} from "react";
import { useNavigate } from "react-router-dom";
import Postcard from "./Postcard";
import PostContext from "../context/post/postContext";

export default function Header() {
  let navigate = useNavigate();
  const context = useContext(PostContext);
  const {getAllPost,addPost}=context;

  const [post,setPost]=useState({title:"",description:"",tag:""})
  
    const handleOnChange=(e)=>{
        e.preventDefault();
        const {title,description,tag}=post
        addPost(title,description,tag);
        setPost('')
        window.location.reload();
    }

    const onChange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }

    useEffect(() => {
      // if (localStorage.getItem('token')) {
      //   getAllPost();
      // } else {
      //   navigate('/login');
      // }
      getAllPost();
    }, []);
    
  return (
    <div className="upperblog">
      <div className="blog">
      <div className="container2"></div>
      <div className="postform">

        <form className="apostform">
          <div className="segment">
            <h1>What's On You'r Mind</h1>
          </div>
          <label className="insidetext">
            <input type="text" placeholder="Post" className="inputfields" id="title" name="title"onChange={onChange}/>
          </label>
         
          <label className="insidetext">
            <input type="text" placeholder="Description" className="inputfields"  name="description" onChange={onChange}/>
          </label>

          <div className="input-group">
            <label className="insidetext">
              <input type="text" placeholder="Caption" className="inputfields" name="tag"   onChange={onChange}/>
            </label>
          </div>
          
          <button className="red" type="submit" onClick={handleOnChange}><i className="icon ion-md-lock"></i> Post</button> 
        </form>
        
      </div>
      <div className="rightsidecontainer"></div>
    </div>
    <div className="userPosts">
        <Postcard/>
    </div>
    </div>
    
  );
}


