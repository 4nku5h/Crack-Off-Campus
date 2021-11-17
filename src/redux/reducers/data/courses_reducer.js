let initialState= {
    totalCourses:null,
    coursesData:[{
        courseID:"",
        courseName:"",
        courseTotalQuestions:"",
        courseRating:"",
        courseImage:""
    }]
  }
  
  let coursesDetails = (state= initialState, action) => {
    switch (action.type) {
      case "COURSES_DATA":
        return {...state,...action.payload};
      default:
        return state;
    }
  }
  
  export { coursesDetails };

  