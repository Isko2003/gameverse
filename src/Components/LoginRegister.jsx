import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Register from './Register';
import { useState } from 'react';

const LoginRegister = () => {

  const [showPass, setShowPass] = useState("password");
  const [eye, setEyeSlash] = useState("fa-solid fa-eye-slash");
  
  const togglePass = () => {
    let passInput = document.querySelector('#password');
    let eye = document.querySelector('.login-fields i');
    if (passInput.getAttribute("type") == "password") {
      setShowPass("text");
    } else {
      setShowPass("password");
    }

    if (eye.classList.contains("fa-eye-slash")) {
      setEyeSlash("fa-solid fa-eye");
    } else {
      setEyeSlash("fa-solid fa-eye-slash");
    }
  }


  return (
    <div>
      <section className='login-register mt-5'>
        <div className="login-signup">
          <div className="login-part">
            <div className="login-text">
              <h2>LOGIN</h2>
              <div className="login-line d-flex justify-content-center">
                <img src="https://gamenation.in/assets/imgs/underline.png" alt="line" />
              </div>
            </div>
            <div className="login-fields">
              <input type="email" name='email' id='email' placeholder='Enter Your Email'/>
              <br />
              <input type={showPass} name='password' id='password' placeholder='Enter Your Password'/>
              <i className={eye} onClick={togglePass}></i>
              <br />
            </div>
            <div className="login-button d-flex justify-content-center">
              <button className='login-btn d-flex justify-content-center'>Login</button>
            </div>
            <span>Not registered yet?</span>
            <Link to={"/register"}><span>Register here</span></Link>
          </div>
        </div>
      </section>
      <Routes>
          <Route path='/register' element={<Register />}/>
        </Routes>
    </div>
  )
}

export default LoginRegister