import React, { useState, useRef } from "react";
import Dropdown from '../components/Dropdown';
import profileLogo from './profile_logo.png';

export default function Profile() {
  const targetRef = useRef(null);

  const [updateDrop, setUpdateDrop] = useState([]);
  const [updatePostImage, setUpdatePostImage] = useState({ myFile: "" });

  // Dummy Data for currentUser
  const currentUser = {
    _id: "1",
    firstName: "John",
    lastName: "Doe",
    userName: "johndoe123",
    interestsData: ["Coding", "Photography", "Travel"],
  };

  const imageData = profileLogo; // Placeholder image for the profile

  const handleOnClick = () => {
    console.log("Updated Image:", updatePostImage);
    console.log("Updated Interests:", updateDrop);
    targetRef.current.click();
    // Simulate reload
    window.location.reload();
  };

  const handleFileUpdate = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setUpdatePostImage({ ...updatePostImage, myFile: base64 });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModala"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Editing your profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="middleware">
                <form>
                  <label htmlFor="file-upload" className="custom-file-upload">
                    {imageData ? <img src={imageData} alt="Profile" /> : <img src={profileLogo} alt="Profile" />}
                  </label>
                  <input
                    type="file"
                    name="myFile"
                    id="file-upload"
                    accept=".jpeg, .png, .jpg"
                    onChange={handleFileUpdate}
                  />
                </form>
              </div>

              <Dropdown updateDrop={updateDrop} setUpdateDrop={setUpdateDrop} interestD={currentUser.interestsData} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={targetRef}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary mx-3" onClick={handleOnClick}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="profile">
        <div className="profile-box">
          <div className="edit">
            <i
              className="fa-solid fa-pen-to-square"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModala"
            ></i>
          </div>
          <div className="upperprofile-pic">
            <img src={imageData} className="profile-pic" alt="Profile" />
          </div>
          
          <div className="profile-name">
            {currentUser.firstName} {currentUser.lastName}
          </div>
          <div className="about">{currentUser.userName}</div>
          <div className="links">
            <i className="fa-brands fa-instagram" style={{ cursor: "pointer" }}></i>
            <i className="fa-brands fa-linkedin" style={{ cursor: "pointer" }}></i>
            <i className="fa-brands fa-github" style={{ cursor: "pointer" }}></i>
          </div>
          <div className="profile-bottom">
            <p>
              I am currently interested in{" "}
              {currentUser.interestsData?.map((interest) => interest + " ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
