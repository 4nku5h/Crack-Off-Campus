import {React} from 'react';
import { useDispatch } from 'react-redux';
import { PlayCircleFill, StarFill } from 'react-bootstrap-icons';
import { setQuizComponentVisivility, fetchQuizData} from '../../../redux/actions/actions';



function CourseCardComponent(course) {
    const dispatch = useDispatch();
    function handleOpenClick() {
        dispatch(fetchQuizData(course.courseID));
        dispatch(setQuizComponentVisivility(true));
        
    }

    return (
        <div className="CourseCardComponent">
            <div className="CourseCardComponent_inner">
                <img id="CourseCardComponent_image" variant="top" src={course.courseImage} />
                <div className="CourseCardComponent_divider">
                    <div className="CourseCardComponent_divider_first">
                        <h2 id="CourseCardComponent_courseName">{course.courseName}</h2>
                        <h2 id="CourseCardComponent_courseTotalQuestions">Questions <span id="CourseCardComponent_courseTotalQuestions_span"> {course.courseTotalQuestions}</span></h2>
                        <h2 id="CourseCardComponent_courseTotalQuestions">Best Score <span id="CourseCardComponent_courseTotalQuestions_span"> 91 </span></h2>
                        <div className="CourseCardComponent_courseRating">
                            {[...Array(Number(course.courseRating))].map((el, i) => {
                                return (
                                    <StarFill id="CourseCardComponent_courseRating_stars" key={i} />
                                )
                            })}
                        </div>

                    </div>
                    <div className="CourseCardComponent_divider_second">
                        <PlayCircleFill id="CourseCardComponent_btnOpen" onClick={() => handleOpenClick()} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseCardComponent;

