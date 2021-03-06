import "./styles.css";
import React, { Component } from "react";
import { connect } from 'react-redux';
//Api

import { bindActionCreators } from "redux";
import { fetchCoursesDetails } from "../../redux/actions/actions";
import { setQuizComponentVisivility } from "../../redux/actions/actions";
import CourseCardComponent from "./CoursesCardComponent/CoursesCardComponent";
import QuizComponent from "./QuizComponent/QuizComponent";
import { Row } from "react-bootstrap";

class CoursesMainComponent extends Component {

    constructor() {
        super();
        this.state = { data: null }
        this.fetchCourses = this.fetchCourses.bind(this);
        this.data = null;
    }

    componentDidMount() {
        this.fetchCourses()
    }

    componentWillUnmount(){
        if(this.props.isQuizComponentVisible==true)
         this.props.setQuizComponentVisivility(false)
    }

    render() {
        return (
            <div className="CoursesComponent">
                {(this.props.isQuizComponentVisible == false) ?
                    (
                        <div className="Courses_Row" xs={1} sm={2} md={2} lg={3} xl={3} xxl={4}>
                            {this.props.coursesDetails.coursesData.map((course) => {
                                return (
                                    <CourseCardComponent {...course} />
                                )
                            })}
                        </div>
                    )
                    :
                    (
                        <QuizComponent />
                    )
                }

            </div>
        )
    }

    fetchCourses() {
        this.props.fetchCoursesDetails();
    }
}



function mapStateToProps(state) {
    return { coursesDetails: state.coursesDetails, isQuizComponentVisible: state.isQuizComponentVisible }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCoursesDetails: fetchCoursesDetails, setQuizComponentVisivility: setQuizComponentVisivility }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesMainComponent);