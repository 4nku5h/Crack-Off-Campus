let initialState= {
  userId:null,
  userName: "",
  userAge: "",
  userTitle: "",
  userCourseDetails: {
    course: "",
    branch: "",
    year: ""
  },
  userProfilePicture: ""
}
let userDetatil= (state=initialState, action)=>{
    switch (action.type) {
      case "USER_DETAIL":
        return {...state,...action.payload};
      default:
        return state;    
    }
  }

  export {userDetatil};