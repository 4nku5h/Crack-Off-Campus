import axios from "axios";

/////////////////////////// LOGIN ////////////////////////////////////+
const loginEndpiont = 'https://raw.githubusercontent.com/4nku5h/API_TEST/main/LOGIN_SIGNUP/login.json';

function getLoginApiReference() {
    return axios.get(loginEndpiont);
}

export {
    getLoginApiReference,
};


////////////////////////////// JOBS DATA /////////////////////////////////+
const jobsEndPoint = 'https://raw.githubusercontent.com/4nku5h/API_TEST/main/JOBS/jobs.json';

function getJobsApiReference() {
    return axios.get(jobsEndPoint);
}

export {
    getJobsApiReference,
};


//////////////////////////////// USER DETAILS /////////////////////////////// user dynamic id NTBI
const userDetailsEndpiont = 'https://raw.githubusercontent.com/4nku5h/API_TEST/main/USERDATA/1.json';

function getUserApiReference() {
    return axios.get(userDetailsEndpiont);
}

export {
    getUserApiReference,
};


//////////////////////////////// COURSES DATA ///////////////////////////////+
const coursesDataEndpiont = 'https://raw.githubusercontent.com/4nku5h/API_TEST/main/Courses/courses.json';

function getCoursesApiReference() {
    return axios.get(coursesDataEndpiont);
}

export {
    getCoursesApiReference,
};

/////////////////////////// QUIZ DATA ///////////////////////////////////////+
const quizDataEndpoint ='https://raw.githubusercontent.com/4nku5h/API_TEST/main/Courses/QUIZ/';

function getQuizApiReference(name) {
    return axios.get(quizDataEndpoint+name+'.json');
}

export {
    getQuizApiReference,
};

////////////////////////////////// HOME-POSTS //////////////////////////////////////////


const communityPostsDataEndpoint ='https://raw.githubusercontent.com/4nku5h/API_TEST/main/HOME/home_posts.json';

function getCommunityPostsApiReference() {
    return axios.get(communityPostsDataEndpoint);
}

export {
    getCommunityPostsApiReference,
};