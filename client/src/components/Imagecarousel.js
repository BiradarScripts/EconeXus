import React, { useRef, useState } from "react";
import Mycard from "./Mycard.js";
import Postuseritem from './Postuseritem.js';
import dummyData from './dummy_data'; 

const Imagecarousel = () => {
  const [no, setNo] = useState(0);
  const users = dummyData;

  const targetRef = useRef(null);

  const btnpressprev = () => {
    if (targetRef.current && no > 0) {
      let width = targetRef.current.clientWidth;
      targetRef.current.scrollLeft = targetRef.current.scrollLeft - width;
      setNo(no - 1);
    }
  };

  const btnpressnext = () => {
    if (targetRef.current && no < users.length - 1) {
      let width = targetRef.current.clientWidth;
      targetRef.current.scrollLeft = targetRef.current.scrollLeft + width;
      setNo(no + 1);
    }
  };

  const userPosts = users[no]?.posts || [];

  return (
    <>
      <div className="upperproductcarousel">
        <div className="product-carousel">
          {no < users.length - 1 ? (
            <button className="next-btn" onClick={btnpressnext}>
              <p>&gt;</p>
            </button>
          ) : null}
          {no > 0 ? (
            <button className="pre-btn" onClick={btnpressprev}>
              <p>&lt;</p>
            </button>
          ) : null}

          <div className="product-container" ref={targetRef}>
            {users.map((user, index) => (
              <Mycard key={user._id} matchedUser={user} postnumber={userPosts.length} />
            ))}
          </div>
        </div>
      </div>

      <div className="postuseritem">
        <h1>Posts</h1>
        <div className="postuseritem-posts">
          {userPosts.map((post) => (
            <Postuseritem key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Imagecarousel;
