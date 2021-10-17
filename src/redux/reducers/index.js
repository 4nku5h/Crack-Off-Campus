import {isLoggedin} from "./state/LoginSignup_reducer";
import {isLoginPageVisible} from "./state/LoginSignup_reducer";
import {userDetatil} from "./data/userDetail_reducer";
import {information_announcementDetails} from "./data/information_announcement_reducer";
import { jobsData } from "./data/jobsData_reducer";
import {isDataFetched} from "./state/api_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    isLoggedin: isLoggedin,
    isLoginPageVisible:isLoginPageVisible,
    userDetatil:userDetatil,
    information_announcementDetails:information_announcementDetails,
    jobsData:jobsData,
    isDataFetched:isDataFetched
  });
  
  export default rootReducer;