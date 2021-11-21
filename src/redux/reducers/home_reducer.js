let initialState={
  total_posts:"",
  data:[{
        post_userId: "",
        post_id: "",
        post_title: "",
        post_rating: "",
        post_date:"",
        post_data: ""
    }]
}
let community_posts = (state = initialState, action) => {
    switch (action.type) {
      case "COMMUNITY_POST_DATA":
        return { ...state, ...action.payload };
      default:
        return state;
    }
}
export  {community_posts};
  