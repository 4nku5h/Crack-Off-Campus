import React from "react";
import './styles.css';
import { useRef } from "react";
import { XLg} from 'react-bootstrap-icons';

let ur = 'https://previews.123rf.com/images/dragonstock/dragonstock1907/dragonstock190700067/128815567-school-stationery-items-on-yellow-background-back-to-school-concept-.jpg'
function LoginSignUp_UI(props) {
  const closeButtonRef=useRef(null);

  return (
    <div className="Login_Page">
      {/* Divider first*/}
      <div className="LoginSignUp_divider_first">
        <div className="flex_row">
          <h3 id="LoginSignup_AppName">Crack off campus</h3>
          <XLg id="btn_close_LoginSignupComponent" ref={closeButtonRef}  onClick={() => props.handleCloseComponent()}/>
        </div>

        <form className="LoginSignUp_form">
          <p id="Login_text">Login</p>

          <input id="input_fields" type="email" name="name" onChange={(e) => { props.data.username = e.target.value }} placeholder="Username" />



          <input id="input_fields" type="password" name="name" onChange={(e) => { props.data.password = e.target.value }} placeholder="Password" />

        </form>
        <div className="LoginSignup_btn_divider">
          <button id="btn_attempt_login_signup" onClick={() => props.handleLogin()}>Login</button>
          <button id="btn_attempt_login_signup_secondary" onClick={() => props.handlecurrentPage()}>{(props.isLoginPageVisible == false) ? ("Login") : ("Create an Account")}</button>

        </div>
      </div>

    </div>

  )
}
export default LoginSignUp_UI;