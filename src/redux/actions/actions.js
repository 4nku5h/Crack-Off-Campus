import { getApiReference } from '../../Api/Api';

/////////////////////////////[ API ]////////////////////////////////////////
export const setApiStatus = (data) => {
  return {
    type: 'API_STATUS',
    payload: data
  };
}

export const fetchData = () => {
  return (dispatch) => {
    getApiReference()
      .then(result => {
        dispatch(setUserDetatil(result.data.userDetails))
        dispatch(setInformation_announcementDetails(result.data.informationAnnouncement))
        dispatch(setJobsData(result.data.jobsData))
        dispatch(setApiStatus(true))
      })
  }
}


/////////////////////////////[ LOGIN/SiGNUP ]/////////////////////////////
export const setLoggedIn = () => {
  return { type: 'LOGIN' };
}
export const setLoginPageVisible = () => {
  return { type: 'LOGIN_VISIBLE' };
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