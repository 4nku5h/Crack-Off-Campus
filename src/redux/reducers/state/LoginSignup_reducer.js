const isLoggedin= (state=false, action)=>{
    switch (action.type) {
      case "LOGIN":
        return !state;
      default:
        return false;    
    }
  }

  //to toggle login signup page
  const isLoginPageVisible= (state=true, action)=>{
    switch (action.type) {
      case "LOGIN_VISIBLE":
        return !state;
      default:
        return true;    
    }
  }
  export  {isLoginPageVisible,isLoggedin};