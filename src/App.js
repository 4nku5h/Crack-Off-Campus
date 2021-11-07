import React from 'react';
import './App.css';
import LoadingComponent from './Component/Loading/LoadingComponent';
import LoginSignupComponent from './Component/LoginSignup/LoginSignupComponent';
import JobsComponent from './Component/CrackOffCampus-Jobs/JobsComponent';
import MainComponent from './Component/MainComponent';

//redux
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setUserDetatil, setInformation_announcementDetails, setJobsData, fetchData } from "../src/redux/actions/actions";
import store from './redux/store/store';
//
///temp study links https://codepen.io/seanseansean/full/EaBZEY , https://www.youtube.com/watch?v=Vi3ij91wqaw
function App() {
    const isAccessWithoutLogin = useSelector(state => state.isAccessWithoutLogin);
    const isLoggedin = useSelector(state => state.isLoggedin)

    return (
        <div className="App" > {
            (isAccessWithoutLogin == false && isLoggedin == false) ? (
                <LoadingComponent />
            ) :
                (
                    <MainComponent />
                )
        }
        </div>
    )

}

export default App;