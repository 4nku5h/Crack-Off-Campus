import React, { useCallback } from "react";
//styles
import './styles.css';
//redux
import { useDispatch, useSelector } from "react-redux";
import { setAccessWithoutLogin, setLoginSignupComponentVisibility} from "../../redux/actions/actions";
import LoginSignupComponent from "../LoginSignup/LoginSignupComponent";

function LoadingComponent() {
  const isLoginSignupComponentVisible = useSelector(state => state.isLoginSignupComponentVisible);
  const dispatch = useDispatch();

  function loadMainComponent_WithoutLogin() {
    setTimeout(() => {
      dispatch(setAccessWithoutLogin(true))
    }, 150)
  }


  //loadMainComponent();

  return (
    <div className="Loading">
      <div className="Loading_inner">
        <h1 >Crack Off Campus</h1>
        <button id="btn_Continue" onClick={loadMainComponent_WithoutLogin}>Continue Without Login</button>
        <button id="btn_Login" onClick={() => { dispatch(setLoginSignupComponentVisibility(true)) }} >Login</button>
        {isLoginSignupComponentVisible == true ?
          (
            <LoginSignupComponent />
          )
          :null
        }   
      </div>
    </div>
  )
}
export default LoadingComponent;