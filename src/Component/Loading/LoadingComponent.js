import React, { Suspense, useCallback, useMemo } from "react";

//styles
import './styles.css';

//redux
import { useDispatch, useSelector } from "react-redux";

import { setAccessWithoutLogin, setLoginSignupComponentVisibility } from "../../redux/actions/actions";
import LoginSignupComponent from "../LoginSignup/LoginSignupComponent";
import AnimationComponent from "./AnimationComponent/AnimationComponent";


import image_career from "./../../assets/loading_1.svg";
import image_career_Second from "./../../assets/loading_2.svg";




function LoadingComponent() {
  const isLoginSignupComponentVisible = useSelector(state => state.isLoginSignupComponentVisible);
  const dispatch = useDispatch();
  function loadMainComponent_WithoutLogin() {
    setTimeout(() => {
      dispatch(setAccessWithoutLogin(true))
    }, 150)
  }


  return (
    <div className="Loading_MAIN">
      <div className="Loading">
        <img src={image_career} className="Loading_first"alt="Loading"></img>

        <div className="btns_multiple">
          <h2 id="h1_sideScreen">Login to your account </h2>
          <img src={image_career_Second} className="loading_second_image" alt="Loading"></img>
          <button id="btn_Continue" onClick={loadMainComponent_WithoutLogin}>Continue Without Login</button>
          <button id="btn_Login" onClick={() => { dispatch(setLoginSignupComponentVisibility(true)) }} >Login</button>
        </div>

      </div>
      <div className="Loading_inner">
        <h1 id="h1_appName">Crack off campus </h1>
        <div className="BlurFilter"></div>


        {isLoginSignupComponentVisible == true ?
          (
            <LoginSignupComponent />
          )
          : null
        }
      </div>
    </div>
  )
}
export default LoadingComponent;