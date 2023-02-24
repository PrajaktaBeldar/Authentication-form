import React, { Fragment, useRef, useState } from 'react'

import {Link} from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Success from './Success.js';

const Login = () => { 
  const navigate = useNavigate();
  const loginTab=useRef(null);
  const switcherTab=useRef(null);
  const registerTab = useRef(null);


  const [loginEmail, setLoginEmail] =useState("");
  const [loginPasssword, setLoginPassword] =useState("");

  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");


  const loginSubmit =(e) => {
    e.preventDefault(); 
    <Success login="login"/>
   navigate("/success");
  };
 
  const registerSubmit = (e) => 
  {
    e.preventDefault();
    navigate("/success");
    }

    const registerDataChange =(e) => 
    {
      if(e.target.name === "avatar")  
      {
        const reader = new FileReader();

        reader.onload = () => {
          if(reader.readyState === 2){
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
          }
        }; 

        reader.readAsDataURL(e.target.files[0]);
      }
    };


  const switchTabs =(e,tab) => {
    if(tab === "login"){
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }

    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  } 
 
  return ( 
   
  <Fragment> 
   <div className="LoginRegister">
    <div className="LoginRegisterBox">
      <div>
        <div className="LoginRegisterToggle">
          <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
          <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
        </div>
        <button ref={switcherTab}></button>
      </div>

      <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
        <div className="loginEmail">
          <input type="email" 
          placeholder='Email'
          required
          value={loginEmail}  
          onChange={(e) => setLoginEmail(e.target.value)}/> 
        </div>

        <div className="loginPassword">
          <input type="password" 
          placeholder='Password'
          required
          value={loginPasssword} 
          onChange={(e) => setLoginPassword(e.target.value)}/>
        </div>

      <Link to="/password/forgot">Forget Password ?</Link>
      <input type="submit" value="login" className="loginBtn" />
      </form>

      <form 
      className= "registerForm"
      ref={registerTab}
      encType="multipart/form-data"
      onSubmit={registerSubmit}
      >
        <div className="signUpName">
         
          <input type="text"
          placeholder="Name" 
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="signUpEmail">
         
          <input type="email"
          placeholder="Email" 
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="signUpPassword">
         
            <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
             />
          </div>

        <div id="registerImage">
        <img src={avatarPreview} alt="Avatar" />
        <input 
        type="file"
        name="avatar"
        accept="image/*" 
        onChange={registerDataChange}
        />
        </div>

        <input type="submit" value="register" className="registerBtn"/>
      </form>
    </div>
   </div>
      
 
  </Fragment>
   
  ) 
  
  
}

export default Login;