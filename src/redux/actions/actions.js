import { getJobsApiReference, getUserApiReference, getLoginApiReference, getCoursesApiReference,getQuizApiReference } from '../../Api/Api';

export const fetchLoginDetails = () => {
  return (dispatch) => {
    getLoginApiReference()
      .then(result => {
        dispatch(setLoggedIn(result.data.isLoggedIn))
      })
  }
}

export const fetchJobsData = () => {
  return (dispatch) => {
    getJobsApiReference()
      .then(result => {
        dispatch(setInformation_announcementDetails(result.data.informationAnnouncement))
        dispatch(setJobsData(result.data.jobsData))
      })
  }
}

export const fetchUserDetails = () => {
  return (dispatch) => {
    getUserApiReference()
      .then(result => {
        dispatch(setUserDetatil(result.data.userDetails))
      })
  }
}

export const fetchCoursesDetails = () => {
  return (dispatch) => {
    getCoursesApiReference()
      .then(result => {
        dispatch(setCoursesData(result.data))
      })
  }
}

export const fetchQuizData = (quiz_name) => {
  return (dispatch) => {
    getQuizApiReference(quiz_name)
      .then(result => {
        dispatch(setQuizData(result.data))
      })
  }
}

/////////////////////////////[ API ]////////////////////////////////////////

export const setAccessWithoutLogin = (data) => {
  return {
    type: 'ACCESS_WITHOUT_LOGIN',
    payload: data
  };
}
/////////////////////////////[ LOGIN/SiGNUP ]/////////////////////////////
export const setLoggedIn = (data) => {
  return {
    type: 'LOGIN',
    payload: data
  };
}
export const setLoginSignupComponentVisibility = (data) => {
  return { 
    type: 'LOGIN_SIGNUP_COMPONENT_VISIBLE',
    payload:data
  };
}


//////////////////////////[ DATA ]///////////////////////////////////////
export const setUserDetatil = (data) => {
  return {
    type: 'USER_DETAIL',
    payload: data
  };
}

export const setInformation_announcementDetails = (data) => {
  return {
    type: 'INFORMATION_ANNOUNCEMENT',
    payload: data
  };
}

export const setJobsData = (data) => {
  return {
    type: 'JOBS_DATA',
    payload: data
  };
}

export const setCoursesData = (data) => {
  return {
    type: 'COURSES_DATA',
    payload: data
  };
}
////////////////////////Courses_state/////////////////////////
export const setQuizComponentVisivility= (data) => {
  return {
    type: 'QUIZ_COMPONENT_VISIBILITY',
    payload: data
  };
}
export const setCurrentQuizID= (data) => {
  return {
    type: 'QUIZ_ID',
    payload: data
  };
}
export const setQuizData = (data) => {
  return {
    type: 'QUIZ_DATA',
    payload: data
  };
}
