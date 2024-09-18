import React, { useState } from "react";
import PostContext from "./postContext";

const PostState = (props) => {
  const host="http://localhost:8080"
  const n1 = []

  const [posts, setPosts] = useState(n1);

  const getAllPost=async()=>{ 
    try{
      const response=await fetch(`${host}/apis/post/getAllPosts/${localStorage.getItem('id')}`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'auth-token':localStorage.getItem('token')
        }
      });
      const json=await response.json();
      setPosts(json);
    }catch(err){
      console.log(err);
    }
  }

  const addPost=async(title,description,tag)=>{
    try{
      const response=await fetch(`${host}/apis/post/addPost`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body:JSON.stringify({title,description,tag})
      });
      const json=await response.json();
      console.log(json)
      const createPost={title:title,description:description,tag:tag}
      setPosts(posts.concat(createPost));
    }catch(err){
      console.log(err);
    }
  }

  const deletePost=async(description)=>{
    try{
      const response=await fetch(`${host}/apis/post/deletePost/${description}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'auth-token':localStorage.getItem('token')
        }
      });
      const json=await response.json();
      console.log(json)
      const newPosts=posts.filter((post)=>{return post.description!==description});
      setPosts(newPosts);
    }catch(err){
      console.log(err);
    }
  }
 
  const editPost=async(id,title,description,tag)=>{
    try{
      console.log(id,"this is id for edit")
      const response=await fetch(`${host}/apis/post/updatPost/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body:JSON.stringify({title,description,tag})
      });
      const json=await response.json();
      console.log(json);
      let newPosts=JSON.parse(JSON.stringify(posts));
      for(let i=0;i<newPosts.length;i++){
        if(newPosts[i]._id===id){
          newPosts[i].title=title;
          newPosts[i].description=description;
          newPosts[i].tag=tag;
          break;
        }
      }
      setPosts(newPosts);
    }catch(err){
      console.log(err);
    }
  }
  

  return (
    <PostContext.Provider value={{ posts,getAllPost,addPost,deletePost,editPost}}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;