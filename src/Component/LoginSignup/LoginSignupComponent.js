import React, { Component } from "react";
import { useDispatch } from "react-redux";
import Login_UI from "./Login_UI";
import SignUp_UI from "./SignUp_UI";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { setLoggedIn, setLoginPageVisible } from "../../redux/actions/actions";

class LoginSignUp extends Component {
  constructor() {
    super();
    this.state={
       loginDetails:{username:null,password:null},
       signupDetails:{username:null,email:null,password:null}
    }
    
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handlecurrentPage=this.handlecurrentPage.bind(this)
  }
  
  togglePage(){
    //Toggle bw Login and Signup
    //console.log(isLoggedin,"asfkoasfgjiaso")
  }

  handleLogin(e){
    // write Login Code Here
    //also save login state to local storage
    if(this.state.loginDetails.username!=null && this.state.loginDetails.password!=null){
      this.props.setLoggedIn()
    }
  }

  handleSignUp(e) {
    // write Signup Code Here
    //also save login state to local storage
    if(this.state.signupDetails.username!=null && this.state.signupDetails.email!=null && this.state.signupDetails.password!=null){
      this.props.setLoggedIn()
    }
    
  }
  
  handlecurrentPage(){
    this.props.setLoginPageVisible()
  } 

  render() {
    return (
      <div className="LoginSignUp">
        <div className="LoginSignUp_inner">
          {((this.props.isLoginPageVisible) ? (
            <Login_UI
              data={this.state.loginDetails}
              isLoginPageVisible={this.state.isLoginPageVisible}
              handleLogin={this.handleLogin}
              handlecurrentPage={this.handlecurrentPage}
            />)
            :
            (
              <SignUp_UI
                data={this.state.signupDetails}
                isLoginPageVisible={this.state.isLoginPageVisible}
                handleSignUp={this.handleSignUp}
                handlecurrentPage={this.handlecurrentPage}
              />
            ))
          }
          
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
   return {
     isLoggedIn:state.isLoggedin,
     isLoginPageVisible:state.isLoginPageVisible
   };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setLoginPageVisible:setLoginPageVisible, setLoggedIn:setLoggedIn}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(LoginSignUp);