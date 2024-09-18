// import './App.css';
// import Home from './Home'

// function App() {

//   return (
//     <>
//       <Home/>
//     </>
//   );
// }

// export default App;


import './App.css';
import Navbar from './components/Navbar';
import Home from './Home'
import Blog from './components/Blog';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile'
import Getconnected from './components/Getconnected';
import PostState from './context/post/PostState'
import UserState from './context/user/UserState'
import ImageState from './context/image/ImageState'
import Put from './components/Put'

import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";

function App() {
  return (
        <>
        <ImageState>
        <UserState>
        <PostState>
          <Router>
            <Navbar />
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/Home" element={<Home/>} />
                <Route exact path="/Post" element={<Blog/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/signUp" element={<SignUp/>} />
                <Route exact path="/Profile" element={<Profile/>} />
                <Route exact path="/getConnected" element={<Getconnected/>} />
                <Route exact path="/uploadImage" element={<Put/>} />
              </Routes>
          </Router>
          </PostState>
          </UserState>
          </ImageState>
        </>
  );
}

export default App;



// hello fro