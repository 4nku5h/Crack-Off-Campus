import React from "react"
import { useDispatch } from 'react-redux';
import { XCircleFill } from 'react-bootstrap-icons';
import { setQuizComponentVisivility, setQuizData } from '../../../redux/actions/actions';
var totalQuestions;
let bestScore = 0;
function QuestionsComponent(props) {
    const quizName=props.quiz_name;
    const BEST_SCORE_KEY="best-score-"+`${quizName}`;
    props=props.quiz_data;

    totalQuestions = Object.keys(props).length;
    const dispatch = useDispatch();
    const [state, toggleincrement] = React.useState({ currentQuestion: 0, correctAnswers: 0, wrongAnswer: 0 });
    const [isNextQuesActive, toggleShow] = React.useState(false);
    const [resultVisibility, toggleResult] = React.useState(false);

    function handleButton(e, answerOption) {
        if (state.currentQuestion < totalQuestions) {
            if (answerOption.isCorrect == "true") {
                setTimeout(() => {
                    toggleincrement({ currentQuestion: state.currentQuestion + 1, correctAnswers: state.correctAnswers + 1, wrongAnswer: state.wrongAnswer })
                    saveBestScore();
                }, 1500)
                e.target.classList.add("right_answer");
            }
            else {
                setTimeout(() => {
                    toggleincrement({ currentQuestion: state.currentQuestion + 1, correctAnswers: state.correctAnswers, wrongAnswer: state.wrongAnswer + 1 })
                    saveBestScore();
                }, 1500)
                e.target.classList.add("wrong_answer");
            }
            toggleShow(true);
            showNextQuestion(e);
        }
    }
    function showNextQuestion(e) {
        setTimeout(() => {
            toggleShow(false)
            e.target.classList.remove("wrong_answer");
            e.target.classList.remove("right_answer");
        }, 1500)
    }

    function saveBestScore() {
        if (window.localStorage.getItem(BEST_SCORE_KEY)) {
            if (window.localStorage.getItem(BEST_SCORE_KEY) < state.correctAnswers) {
                localStorage.setItem(BEST_SCORE_KEY, state.correctAnswers);
            }
        } else localStorage.setItem(BEST_SCORE_KEY, 0);
        console.log(window.localStorage.getItem(BEST_SCORE_KEY));
    }
    function getBestScore() {
        return window.localStorage.getItem(BEST_SCORE_KEY);
    }

    function isButonDisabled() {
        if (isNextQuesActive == true) return true;
        return false;
    }

    function exitHandler() {
        dispatch(setQuizComponentVisivility(false));
        dispatch(setQuizData(null))
    }

    return (
        <div className="Parent_MAIN">
            <h1 className="Quiz_NAME">Crack Off Campus<span id="span">{quizName}</span></h1>
            <div className='Parent'>
                {(state.currentQuestion == totalQuestions) ?
                    (
                        <div className='ScoreCard'>
                            <div className="div_ScoreCard">
                                {saveBestScore()}
                                <h1 id="BestScore">BestScore : {getBestScore()}</h1>
                                <h1 id="CurrentScore" style={{ alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>You Scored {state.correctAnswers} Out of {totalQuestions}</h1>
                                <XCircleFill id="quiz_exit" onClick={() => exitHandler()}></XCircleFill>
                            </div>

                        </div>
                    )
                    :
                    (
                        <div className="Quiz_Panel_Main">
                            <div className='quiz'>
                                <div className='questions-section'>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox" checked={resultVisibility} onClick={() => toggleResult(!resultVisibility)}></input>
                                        <label id="checkbox_showResult"for="checkbox">Show Result</label>
                                    </div>
                                    <h1 className="QuestionCount">Question {state.currentQuestion + 1}<span>/{Object.keys(props).length}</span></h1>
                                    <p id="question">{props[state.currentQuestion].questionText}</p>
                                </div>
                                <div className='answer-section'>
                                    {props[state.currentQuestion].answerOptions.map((answerOption) => (
                                        <button id="btn" onClick={(e) => handleButton(e, answerOption)} disabled={isButonDisabled()} >{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="LiveResults">
                                <div className="Result" style={resultVisibility ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                    <div className="right_div">
                                        <span id="Resultcorrect">Right: {state.correctAnswers}</span>

                                    </div>
                                    <div className="wrong_div">
                                        <span id="Resultwrong">Wrong: {state.wrongAnswer}</span>

                                    </div>

                                </div>

                            </div>
                        </div>
                    )}

                <h3 id="quiz_Note">Note: Press [ESC] to Exit</h3>
            </div>s
        </div>

    )
}
export default QuestionsComponent;