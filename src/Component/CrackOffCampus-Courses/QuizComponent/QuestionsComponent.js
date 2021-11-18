import React from "react"
import { ArrowClockwise, CheckCircleFill ,XCircleFill} from 'react-bootstrap-icons';
var totalQuestions;
let bestScore=0;
function QuestionsComponent(props) {

    totalQuestions = Object.keys(props).length;
    const [state, toggleincrement] = React.useState({ currentQuestion: 0, correctAnswers: 0, wrongAnswer: 0 });
    const [isNextQuesActive, toggleShow] = React.useState(false);
    const [resultVisibility, toggleResult] = React.useState(false);

    function handleButton(e, answerOption){
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

    function saveBestScore(){
        if (window.localStorage.getItem("best-score")) {
            if(window.localStorage.getItem("best-score")<state.correctAnswers){
                localStorage.setItem("best-score", state.correctAnswers);
            }
        }else localStorage.setItem("best-score", 0);
        console.log(window.localStorage.getItem("best-score"));
    }
    function getBestScore(){
        return window.localStorage.getItem("best-score");
    }

    function isButonDisabled() {
        if (isNextQuesActive == true) return true;
        return false;
    }

    return (
        <div className='Parent'>
            {(state.currentQuestion == totalQuestions) ? (
                <div className='ScoreCard'>
                    {saveBestScore()}
                    <h1 id="BestScore">BestScore : {getBestScore()}</h1>
                    <h1 id="CurrentScore" style={{ alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>You Scored {state.correctAnswers} Out of {totalQuestions}</h1>
                    <ArrowClockwise id="reload" color="#2b2b2b" size={30} onClick={() => { toggleincrement({ currentQuestion: 0, correctAnswers: 0, wrongAnswer: 0 }) }}></ArrowClockwise>

                </div>
            )
                :
                (
                    <div className="Quiz_Panel_Main">
                        <h1 className="" style={{ fontSize: "50px", color:'#ffffff',textShadow:"-1px -1px 0 #000"}}>React Quiz</h1>
                        <div className='quiz'>
                            <div className='questions-section'>
                                <div className="checkbox">
                                    <input type="checkbox" id="checkbox" checked={resultVisibility} onClick={() => toggleResult(!resultVisibility)}></input>
                                    <label for="checkbox">Show Result</label>
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
                                <CheckCircleFill color="#3cff00" size={30} ></CheckCircleFill>
                                    <span id="Resultcorrect">{state.correctAnswers}</span>

                                </div>
                                <div className="wrong_div">
                                <XCircleFill color="#ff2a2a" size={30} ></XCircleFill>
                                    <span id="Resultwrong">{state.wrongAnswer}</span>

                                </div>

                            </div>

                        </div>
                    </div>
                )}


        </div>
    )
}
export default QuestionsComponent;