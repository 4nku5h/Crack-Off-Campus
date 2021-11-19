const currentSelectdComponent = (state = "HOME", action) => {
    switch (action.type) {
      case "NAVBAR_COMPONENT_TOGGLE":
        return action.payload;
      default:
        return state;
    }
  }
  export { currentSelectdComponent };