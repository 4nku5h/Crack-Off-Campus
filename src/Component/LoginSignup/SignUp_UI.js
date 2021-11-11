import React from "react";
import { HouseFill} from 'react-bootstrap-icons';

let ur = 'https://previews.123rf.com/images/dragonstock/dragonstock1907/dragonstock190700067/128815567-school-stationery-items-on-yellow-background-back-to-school-concept-.jpg'
function SignUp_UI(props) {
  return (
    <div className="Signup_Page">
      {/* Divider first*/}
      <div className="LoginSignUp_divider_first">
      <div className="flex_row">
          <h3 id="LoginSignup_AppName">Crack off campus</h3>
          <HouseFill id="btn_close_LoginSignupComponent" style={{ marginRight: "7px" }} id="logo_account" color="#000" size={30} onClick={() => props.handleCloseComponent()}/>
        </div>
        <form className="LoginSignUp_form">
          <p id="Login_text">Signup</p>
          
            <input id="input_fields" type="text" name="name" onChange={(e) => { props.data.username = e.target.value }} placeholder="Username" />
          
          
            
            <input id="input_fields" type="email" name="name" onChange={(e) => { props.data.email = e.target.value }} placeholder="Email" />
          
          
            
            <input id="input_fields" type="password" name="name" onChange={(e) => { props.data.password = e.target.value }}  placeholder="Password"/>
          
        </form>
        <div className="LoginSignup_btn_divider">
          <button id="btn_attempt_login_signup" onClick={() => props.handleSignUp()}>Signup</button>
          <button id="btn_attempt_login_signup_secondary" onClick={() => props.handlecurrentPage()}>Already have an account?</button>
          {console.log(props)}
        </div>
      </div>
    </div>
  )
}
export default SignUp_UI;