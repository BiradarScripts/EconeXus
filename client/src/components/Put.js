import { useState } from 'react'
import avatar from './profile_logo.png'
import '../App.css';
import {useNavigate} from 'react-router-dom'

import axios from 'axios';

const host = "http://localhost:8080"

function App() {

  let navigate=useNavigate();
  
  const [postImage, setPostImage] = useState( { myFile : ""})

  const createPost = async (newImage) => {
    try{
      await axios.post(`${host}/apis/image/uploadImage/${localStorage.getItem('id')}`, newImage)
    }catch(error){
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage)
    navigate('/Profile')
    console.log("Uploaded")
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile : base64 })
  }

  return (

    <div className="middleware">
      <form onSubmit={handleSubmit}>

        <label htmlFor="file-upload" className='custom-file-upload'>
          <img src={postImage.myFile || avatar} alt="" />
        </label>

        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />
         <div></div>
         <div></div>
         <button type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default App

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}


