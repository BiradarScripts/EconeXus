import React from "react";

export default function Postuseritem(props) {
  return (
    <div className="userpostcontainer">
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
          </div>
          
        </div>
      </div>
    </div>
  );
}
