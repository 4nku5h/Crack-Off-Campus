import React, { Suspense, useCallback, useMemo } from "react";

//styles
import './styles.css';

//redux
import { useDispatch, useSelector } from "react-redux";

import { setAccessWithoutLogin, setLoginSignupComponentVisibility } from "../../redux/actions/actions";
import LoginSignupComponent from "../LoginSignup/LoginSignupComponent";
import AnimationComponent from "./AnimationComponent/AnimationComponent";






function LoadingComponent() {
  const isLoginSignupComponentVisible = useSelector(state => state.isLoginSignupComponentVisible);
  const dispatch = useDispatch();
  function loadMainComponent_WithoutLogin() {
    setTimeout(() => {
      dispatch(setAccessWithoutLogin(true))
    }, 150)
  }

  
  return (
    <div className="Loading">
      <div className="Loading_inner">
        <AnimationComponent />
        <h1 id="h1_appName">Crack off campus </h1>
        <div className="BlurFilter"></div>
        <div className="btns_multiple">
          <button id="btn_Continue" onClick={loadMainComponent_WithoutLogin}>Continue Without Login</button>
          <button id="btn_Login" onClick={() => { dispatch(setLoginSignupComponentVisibility(true)) }} >Login</button>
        </div>

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