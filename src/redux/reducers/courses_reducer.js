
/////////////////////// DATA  /////////////////////////////////////////
let initialState = {
  totalCourses: null,
  coursesData: [{
    courseID: "",
    courseName: "",
    courseTotalQuestions: "",
    courseRating: "",
    courseImage: ""
  }]
}

let coursesDetails = (state = initialState, action) => {
  switch (action.type) {
    case "COURSES_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}




let quizInitialState = {
  quiz_name: null,
  quiz_data: [{
    questionText: "",
    questionNumber: "",
    answerOptions: [{ answerText: "", isCorrect: "" }]
  }]
}

let quizData = (state = quizInitialState, action) => {
  if(action.payload==null) return quizInitialState;
  switch (action.type) {
    case "QUIZ_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}




//////////////////////////////////// STATE //////////////////////////////////

const isQuizComponentVisible = (state = false, action) => {
  switch (action.type) {
    case "QUIZ_COMPONENT_VISIBILITY":
      return action.payload;
    default:
      return state;
  }
}

export { coursesDetails, quizData, isQuizComponentVisible};