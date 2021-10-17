const isDataFetched = (state=false,action)=>{
    switch(action.type){
        case "API_STATUS":
           return action.payload;
        default: 
           return state;
    }
}
export {isDataFetched};