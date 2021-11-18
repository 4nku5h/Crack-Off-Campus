const isLoggedin = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    default:
      return state;
  }
}

//to toggle login signup page
const isLoginSignupComponentVisible = (state = false, action) => {
  switch (action.type) {
    case "LOGIN_SIGNUP_COMPONENT_VISIBLE":
      return action.payload;
    default:
      return state;
  }
}
export { isLoginSignupComponentVisible, isLoggedin };


const isAccessWithoutLogin = (state = false, action) => {
  switch (action.type) {
    case "ACCESS_WITHOUT_LOGIN":
      return action.payload;
    default:
      return state;
  }
}
export { isAccessWithoutLogin };
