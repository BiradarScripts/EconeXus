import React, { useState, useRef } from "react";
import Postitem from "./Postitem";

export default function Postcard() {
  const refClose = useRef(null);

  // Dummy Posts Data
  const dummyPosts = [
    {
      _id: "1",
      title: "Exploring React Hooks",
      description: "A deep dive into useState and useEffect with examples.",
      tag: "React",
    },
    {
      _id: "2",
      title: "Understanding JavaScript Closures",
      description: "An explanation of closures and their use cases.",
      tag: "JavaScript",
    },
    {
      _id: "3",
      title: "CSS Grid vs. Flexbox",
      description: "A comparison between CSS Grid and Flexbox layouts.",
      tag: "CSS",
    },
    {
      _id: "4",
      title: "The Future of Web Development",
      description: "Predictions on the evolution of web technologies.",
      tag: "Web Development",
    },
    {
      _id: "5",
      title: "Node.js for Beginners",
      description: "A beginner's guide to setting up a Node.js server.",
      tag: "Node.js",
    },
  ];

  const [posts, setPosts] = useState(dummyPosts);
  const [updatePost, setUpdatePost] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updatePostHandler = (currentPost) => {
    setUpdatePost({
      id: currentPost._id,
      etitle: currentPost.title,
      edescription: currentPost.description,
      etag: currentPost.tag,
    });
  };

  const handleOnChange = () => {
    const { id, etitle, edescription, etag } = updatePost;
    const updatedPosts = posts.map((post) =>
      post._id === id
        ? { ...post, title: etitle, description: edescription, tag: etag }
        : post
    );
    setPosts(updatedPosts);
    refClose.current.click();
  };

  const onChange = (e) => {
    setUpdatePost({ ...updatePost, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <i className="fa-solid fa-triangle-exclamation"></i> Editing
                your post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label className="insidetext">
                <input
                  type="text"
                  placeholder="Title"
                  value={updatePost.etitle}
                  className="inputfields"
                  id="title"
                  name="etitle"
                  onChange={onChange}
                />
              </label>

              <label className="insidetext">
                <input
                  type="text"
                  placeholder="Description"
                  value={updatePost.edescription}
                  className="inputfields"
                  name="edescription"
                  onChange={onChange}
                />
              </label>

              <div className="input-group">
                <label className="insidetext">
                  <input
                    type="text"
                    placeholder="Tag"
                    className="inputfields"
                    value={updatePost.etag}
                    name="etag"
                    onChange={onChange}
                  />
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary mx-3"
                onClick={handleOnChange}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="postscontainer">
        <h1>Your Posts</h1>
        <div className="inner-postcard-start">
          {posts.map((post) => (
            <Postitem
              key={post._id}
              updatePostHandler={updatePostHandler}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
