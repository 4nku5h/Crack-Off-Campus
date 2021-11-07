import React, { Component } from "react";
import './styles.css'
import Login_UI from "./Login_UI";
import SignUp_UI from "./SignUp_UI";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { setLoggedIn, setLoginSignupComponentVisibility } from "../../redux/actions/actions";

// API
import {fetchLoginDetails,fetchUserDetails} from "../../redux/actions/actions";

class LoginSignUp extends Component {
  constructor() {
    super();
    this.state={
       isLoginPageVisible:true,
       loginDetails:{username:null,password:null},
       signupDetails:{username:null,email:null,password:null}

    }
    
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handlecurrentPage=this.handlecurrentPage.bind(this)
    this.handleCloseComponent=this.handleCloseComponent.bind(this)
  }
  
  togglePage(){
    //Toggle bw Login and Signup
    //console.log(isLoggedin,"asfkoasfgjiaso")
  }

  handleLogin(e){
    // write Login Code Here
    //also save login state to local storage
    if(this.state.loginDetails.username!=null && this.state.loginDetails.password!=null){
      this.props.fetchLoginDetails()
      this.props.fetchUserDetails()
      this.props.setLoginSignupComponentVisibility(false)

    }
  }

  handleSignUp(e){
    // write Signup Code Here
    //also save login state to local storage
    if(this.state.signupDetails.username!=null && this.state.signupDetails.email!=null && this.state.signupDetails.password!=null){
      this.props.fetchLoginDetails()
      this.props.fetchUserDetails()
      this.props.setLoginSignupComponentVisibility(false)
    }
    
  }
  
  handlecurrentPage(){
    this.setState({isLoginPageVisible:!this.state.isLoginPageVisible})
  } 
  handleCloseComponent(){
    this.props.setLoginSignupComponentVisibility(false)
  }

  render() {
    return (
      <div className="LoginSignUp">
        <div className="LoginSignUp_inner">
          {((this.state.isLoginPageVisible) ? (
            <Login_UI
              data={this.state.loginDetails}
              isLoginPageVisible={this.state.isLoginPageVisible}
              handleLogin={this.handleLogin}
              handlecurrentPage={this.handlecurrentPage}
              handleCloseComponent={this.handleCloseComponent}
            />)
            :
            (
              <SignUp_UI
                data={this.state.signupDetails}
                isLoginPageVisible={this.state.isLoginPageVisible}
                handleSignUp={this.handleSignUp}
                handlecurrentPage={this.handlecurrentPage}
                handleCloseComponent={this.handleCloseComponent}
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
    isLoggedin:state.isLoggedin,
     isLoginSignupComponentVisible:state.isLoginSignupComponentVisible
   };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setLoginSignupComponentVisibility:setLoginSignupComponentVisibility, setLoggedIn:setLoggedIn, fetchLoginDetails:fetchLoginDetails, fetchUserDetails,fetchUserDetails}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(LoginSignUp);