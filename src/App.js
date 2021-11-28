import React from 'react';
import './App.css';
import LoadingComponent from './Component/Loading/LoadingComponent';
import MainComponent from './Component/MainComponent';

//redux
import { useDispatch, useSelector } from "react-redux";
//
///temp study links https://codepen.io/seanseansean/full/EaBZEY , https://www.youtube.com/watch?v=Vi3ij91wqaw
//https://docs.google.com/document/d/1f547vOYxBIK1lE-DWu95TyCJWN32H4T0/edit?usp=sharing&ouid=113426037018131332881&rtpof=true&sd=true

function App() {
    const isAccessWithoutLogin = useSelector(state => state.isAccessWithoutLogin);
    const isLoggedin = useSelector(state => state.isLoggedin)
    const key_MainVisibility="MAIN_ACCESSIBLE";
    
    function saveToLocelStorage(key){
        localStorage.setItem(key,true);
    } 
    function isPreviouslyLoggedIn(key){
        if(window.localStorage.getItem(key)){
            return window.localStorage.getItem(key)
        }else return false;
    }
    return (
        <div className="App" > {
            (isAccessWithoutLogin == false && isLoggedin == false && isPreviouslyLoggedIn(key_MainVisibility)==false) ? (
                <LoadingComponent />
            ) :
                (
                    <>
                       {saveToLocelStorage(key_MainVisibility)}
                        <MainComponent />
                    </>

                )
        }
        </div>
    )

}

export default App;