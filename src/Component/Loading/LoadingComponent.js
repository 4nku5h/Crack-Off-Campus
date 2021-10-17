import React from "react";
//Api

//redux
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setUserDetatil, setInformation_announcementDetails, setJobsData,fetchData} from "../../redux/actions/actions";
function LoadingComponent() {
  const dispatch=useDispatch();



//Fetching data
React.useEffect(() => {
      dispatch(fetchData())
}, []);

  return (
    <div className="Loading">
      <div className="Loading_inner">
        <h1 > Loding Component</h1> 
      </div>
    </div>
  )
}
export default LoadingComponent;