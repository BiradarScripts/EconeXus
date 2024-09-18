import React, { useState,useContext,useRef} from "react";
import PostContext from "../context/post/postContext";


export default function Postitem(props) {

  const targetRef=useRef(null)
  const context = useContext(PostContext);
  const [del,setDel]=useState(null);

    const {deletePost}=context;

    const onHandleClick=(des)=>{
      setDel('')
      console.log(des)
      console.log(del)
      if(del==='Delete'){
        console.log(del)
        setDel('')
        deletePost(des)
        targetRef.current.click();
      }
    }

    const onChange=(e)=>{
      setDel(e.target.value)
    }
    
  return (
    <div>
      <div className="modal fade" id="exampleModals" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="exampleModalLabel"><i className="fa-solid fa-triangle-exclamation"></i> Deleting your post</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <label className="insidetext">
                      <input type="text" placeholder="Type 'Delete' to drop the post" className="inputfields" id="delete" name="delete" onChange={onChange}/>
                </label>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={targetRef}>Close</button>
              <button type="button" className="btn btn-primary"  onClick={()=>{onHandleClick(props.post.description)}}>Delete</button>
            </div>
          </div>
        </div>
      </div>

  
        <div className="posts-container">
          <div className="card">
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                className="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <span className="tag tag-blue">{props.post.tag}</span>
              <h4>{props.post.title}</h4>
              <p>
                {props.post.description}  
              </p>
            <div className="card_footer">
              <div className="editbuttonofpostcard ">
                <i className="fa-solid fa-pen-to-square " onClick={()=>props.updatePostHandler(props.post)} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
              </div>
              
              <div className="deletebuttonofpostcard">
                <i className="fa-solid fa-trash"  data-bs-toggle="modal" data-bs-target="#exampleModals"></i>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}