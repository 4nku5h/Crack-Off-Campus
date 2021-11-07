import axios from "axios";

/////////////////////////// LOGIN ////////////////////////////////////
const loginEndpiont = 'https://raw.githubusercontent.com/4nku5h/API_TEST/main/login.json';

function getLoginApiReference() {
    return axios.get(loginEndpiont);
}

export {
    getLoginApiReference,
};


////////////////////////////// JOBS DATA /////////////////////////////////
const jobsEndPoint = 'https://raw.githubusercontent.com/4nku5h/API_TEST/main/jobs.json';

function getJobsApiReference() {
    return axios.get(jobsEndPoint);
}

export {
    getJobsApiReference,
};


//////////////////////////////// USER DETAILS ///////////////////////////////
const userDetailsEndpiont = 'https://raw.githubusercontent.com/4nku5h/API_TEST/main/user.json';

function getUserApiReference() {
    return axios.get(userDetailsEndpiont);
}

export {
    getUserApiReference,
};


//////////////////////////////// COURSES DATA ///////////////////////////////
const coursesDataEndpiont = 'https://raw.githubusercontent.com/4nku5h/API_TEST/main/courses.json';

function getCoursesApiReference() {
    return axios.get(coursesDataEndpiont);
}

export {
    getCoursesApiReference,
};