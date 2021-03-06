import { isLoggedin, isLoginSignupComponentVisible, isAccessWithoutLogin } from "./LoginSignup_reducer";
import { isQuizComponentVisible } from "./courses_reducer";
import { information_announcementDetails } from "./information_announcement_reducer";
import { coursesDetails, quizData } from "./courses_reducer";
import { userDetatil } from "./userDetail_reducer";
import { jobsData } from "./jobsData_reducer";
import { jobsFilterData } from "./jobsData_reducer";
import {currentSelectdComponent} from "./navbar_reducer"
import {community_posts} from "./home_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLoggedin: isLoggedin,
  isLoginSignupComponentVisible: isLoginSignupComponentVisible,
  userDetatil: userDetatil,
  information_announcementDetails: information_announcementDetails,
  jobsData: jobsData,
  jobsFilterData:jobsFilterData,
  isAccessWithoutLogin: isAccessWithoutLogin,
  coursesDetails: coursesDetails,
  quizData: quizData,
  isQuizComponentVisible: isQuizComponentVisible,
  currentSelectdComponent:currentSelectdComponent,
  community_posts:community_posts
});

export default rootReducer;