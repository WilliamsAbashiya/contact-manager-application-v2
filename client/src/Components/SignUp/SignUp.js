import React from 'react';
import "./SignUp.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
        <header />
        {/* start of signup wrapper */}
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
      <input type="password" placeholder="Confirm Password" />
    </div>
    <div className="signup-form-row">
      <label for="termsConditions">
        <input type="checkbox" id="termsConditions" />I agree to the
        <link to="/termsConditions">Terms and Conditions</link>
      </label>
    </div>
    <div className="signup-form-row">
      <button>Create Account</button>
    </div>
    <div className="signup-form-row">
      <i>
      Already have an account? &nbsp;
      <Link to="/Login">Login here</Link>
      </i>
    </div>

    </div>
    </form>
    </div>
    {/* end of signup wrapper */}
    <footer />
    </div>
  );
 }

export default SignUp
