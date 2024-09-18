import React, { useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Imagecarousel from './Imagecarousel.js';
import UserContext from "../context/user/userContext";



export default function Getconnected() {

  const userContext = useContext(UserContext);
  const { getMatchedUser} = userContext; 
  const navigate = useNavigate();

  

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // if (!localStorage.getItem('token')) {
    //   navigate('/login');
    // } else {
    //   getMatchedUser();
    // }
    getMatchedUser();
  }, []);

  return (
    <>
    <div className="getconnected">
      <Imagecarousel />
    </div>
    </>
  );
}
