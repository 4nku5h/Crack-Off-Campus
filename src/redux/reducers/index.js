import { isLoggedin, isLoginSignupComponentVisible, isAccessWithoutLogin } from "./LoginSignup_reducer";
import { isQuizComponentVisible } from "./courses_reducer";
import { information_announcementDetails } from "./information_announcement_reducer";
import { coursesDetails, quizData } from "./courses_reducer";
import { userDetatil } from "./userDetail_reducer";
import { jobsData } from "./jobsData_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLoggedin: isLoggedin,
  isLoginSignupComponentVisible: isLoginSignupComponentVisible,
  userDetatil: userDetatil,
  information_announcementDetails: information_announcementDetails,
  jobsData: jobsData,
  isAccessWithoutLogin: isAccessWithoutLogin,
  coursesDetails: coursesDetails,
  quizData, quizData,
  isQuizComponentVisible: isQuizComponentVisible
});

export default rootReducer;