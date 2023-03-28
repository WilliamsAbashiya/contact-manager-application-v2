import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <React.Fragment>
        <header />
        {/* {start of login component} */}
        <div className="signup-wrapper">
      <form action= "" method="post">
        <div className="signup-form">
        <div className="signup-form-row form-title"> Signup</div>
        
    <div className="signup-form-row">
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
    </div>

    <div className="signup-form-row">
      <input type="email" placeholder="example@mail.com" />
    </div>

    <div className="signup-form-row">
      <input type="password" placeholder="Password" />
    </div>
    
    <div className="signup-form-row">
        <button>Login</button>
    </div>

    <div className="signup-form-row">
      <i>
      Don't have an account? &nbsp;
      <Link to="/signup">Create Account here</Link>
      </i>
    </div>
    </div>
    </form>
    </div>
    {/* {end of login component} */}
        <footer />
    </React.Fragment>
  );
};

export default Login