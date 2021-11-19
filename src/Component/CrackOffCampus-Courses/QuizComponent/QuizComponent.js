
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { setQuizComponentVisivility, setQuizData } from '../../../redux/actions/actions';
import QuestionsComponent from './QuestionsComponent';
import AnimationComponent from "./../../Loading/AnimationComponent/AnimationComponent";

function QuizComponent() {
    const quizData = useSelector(state => state.quizData);
    const dispatch = useDispatch();
    const handle = useFullScreenHandle();
    useEffect(() => {
        //document.addEventListener("keydown", exitHandler, true);
        document.addEventListener('fullscreenchange', exitHandler);
        document.addEventListener('webkitfullscreenchange', exitHandler);
        document.addEventListener('mozfullscreenchange', exitHandler);
        document.addEventListener('MSFullscreenChange', exitHandler);
        handle.enter()
    }, [])

    function exitHandler() {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            dispatch(setQuizComponentVisivility(false));
            dispatch(setQuizData(null))
        }
    }
    return (
        <div>
            <FullScreen className="QuizComponent_FULLSCREEN" handle={handle}>
                <AnimationComponent />
                <QuestionsComponent {...quizData}/>
            </FullScreen>
        </div>

    )
}
export default QuizComponent;

//yarn add react-full-screen
