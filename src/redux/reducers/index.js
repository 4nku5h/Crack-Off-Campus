import {isLoggedin} from "./state/LoginSignup_reducer";
import {isLoginSignupComponentVisible} from "./state/LoginSignup_reducer";
import {userDetatil} from "./data/userDetail_reducer";
import {information_announcementDetails} from "./data/information_announcement_reducer";
import { jobsData } from "./data/jobsData_reducer";
import {isAccessWithoutLogin} from "./state/LoginSignup_reducer";
import { coursesDetails } from "./data/courses_reducer";
import {isQuizComponentVisible} from "./state/Courses_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    isLoggedin: isLoggedin,
    isLoginSignupComponentVisible:isLoginSignupComponentVisible,
    userDetatil:userDetatil,
    information_announcementDetails:information_announcementDetails,
    jobsData:jobsData,
    isAccessWithoutLogin:isAccessWithoutLogin,
    coursesDetails:coursesDetails,
    isQuizComponentVisible:isQuizComponentVisible
  });
  
  export default rootReducer;