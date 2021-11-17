
const isQuizComponentVisible = (state = false, action) => {
  switch (action.type) {
    case "QUIZ_COMPONENT_VISIBILITY":
      return action.payload;
    default:
      return state;
  }
}
export { isQuizComponentVisible };