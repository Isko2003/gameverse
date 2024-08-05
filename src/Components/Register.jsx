import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import LoginRegister from './LoginRegister';
import Swal from 'sweetalert2';

const Register = () => {

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

  const console2 = () => {
    Swal.fire({
      title: "You Have Been Registered Successfully",
      // text: "Product Added to Sell Cart!",
      icon: "success"
    });
  }
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/login-register' element={<LoginRegister />}/>
      </Routes>
      <section className='login-register mt-5'>
        <div className="login-signup">
          <div className="login-part">
            <div className="login-text">
              <h2>REGISTER</h2>
              <div className="login-line d-flex justify-content-center">
                <img src="https://gamenation.in/assets/imgs/underline.png" alt="line" />
              </div>
            </div>
            <div className="login-fields">
              <input type="text" name='firstname' placeholder='Name'/>
              <br />
              <input type="text" name='lastname' placeholder='Surname'/>
              <br />
              <input type="email" name='email' id='email' placeholder='Email'/>
              <br />
              <input type={showPass} name='password' id='password' placeholder='Password'/>
              <i className={eye} onClick={togglePass}></i>
              <br />
            </div>
            <div className="login-button d-flex justify-content-center">
              <Link to={"/login-register"}><button className='login-btn d-flex justify-content-center' onClick={console2}>Sign in</button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register