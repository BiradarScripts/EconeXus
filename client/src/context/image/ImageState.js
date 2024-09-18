import React, { useState } from "react";
import ImageContext from "./imagaContext";

// http://localhost:8080/api/auth/editUser/64d6b83489b3e418bee15d88

const ImageState = (props) => {
    const host="http://localhost:8080";
    

const [imageData, setImageData] = useState("");

  const getImage = async () => {
    try {
      const response = await fetch(
        `${host}/apis/image/getImage/${localStorage.getItem("id")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const json = await response.json();
      setImageData(json[0].image);
    } catch (err) {
      console.log(err);
    }
  };

  const updateImage=async(newImage)=>{
    try{
      const response = await fetch(
        `${host}/apis/image/updateImage/${localStorage.getItem("id")}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body:JSON.stringify({
            myFile:newImage.myFile
          })
        }
      );
      const json = await response.json();
      console.log(json)
    }catch(err){
      console.log(err)
    }
  }



    return (
        <ImageContext.Provider value={{imageData,getImage,updateImage}}>
          {props.children}
        </ImageContext.Provider>
      );
}

export default ImageState;