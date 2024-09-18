import React,{useState,useEffect} from 'react'
import profileLogo from './profile_logo.png';

const Mycard = (props) => {
  const host = "http://localhost:8080";

    const handleOnChange = () => {
        console.log(props.matchedUser._id);
    }

    const [imageData, setImageData] = useState("");

    const getImage = async () => {
      try {
        const response = await fetch(`${host}/apis/image/getImage/${props.matchedUser._id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        });
        const json = await response.json();
        setImageData(json[0].image);
      } catch (err) {
      }
    }
  
    useEffect(() => {
      getImage();
    }, []);

    return (
        <div className="slideshow">
        <div className="slideshow-box">
          <div className="upperpicimage">
          <div className="slideshow-pic">
            {imageData ? <img src={imageData} alt="Profile" /> : <img src={profileLogo} alt="/"/>}
          </div>
          </div>
          <div className="slideshow-name">{props.matchedUser.firstName} {props.matchedUser.lastName}</div>
          <div className="about">{props.matchedUser.email}</div>
          <div className="links mx-2">
          <i className="fa-brands fa-instagram" style={{cursor:"pointer"}}></i>
          <i className="fa-brands fa-linkedin" style={{cursor:"pointer"}}></i>
          <i className="fa-brands fa-github" style={{cursor:"pointer"}}></i>
          </div>
          <div className="slideshow-bottom" onClick={handleOnChange}>
              <p>
              I am currently interested in{" "}
              {props.matchedUser.interestsData?.map((interest) => interest + " ")}
            </p>

          </div>

          <div className="checkpost">
            <div className="innercheckpost">
            {props.postnumber} posts
            </div>
            </div>
        </div>
      </div>
    )
}

export default Mycard;