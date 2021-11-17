import React from 'react';
import { ArrowRightCircleFill, StarFill } from 'react-bootstrap-icons';

function CourseCardComponent(course) {

    return (
        <div className="CourseCardComponent">
            <div className="CourseCardComponent_inner">
                <img id="CourseCardComponent_image" variant="top" src={course.courseImage} />
                <div className="CourseCardComponent_divider">
                    <div className="CourseCardComponent_divider_first">
                        <h2 id="CourseCardComponent_courseName">{course.courseName}</h2>
                        <h2 id="CourseCardComponent_courseTotalQuestions">Questions {course.courseTotalQuestions}</h2>
                        {
                            [...Array(Number(course.courseRating))].map((el,i)=>{
                                return (
                                    <StarFill id="CourseCardComponent_courseRating" key={i} />
                                    )
                            })
                        }
                    </div>
                    <div className="CourseCardComponent_divider_second">
                        <ArrowRightCircleFill id="CourseCardComponent_btnOpen" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseCardComponent;

