let initialState= {
  totalInfoCount:null,
  info:[{
    infoText: "",
    infoLink: ""
  }]
}

let information_announcementDetails = (state= initialState, action) => {
  switch (action.type) {
    case "INFORMATION_ANNOUNCEMENT":
      return {...state,...action.payload};
    default:
      return state;
  }
}

export { information_announcementDetails };