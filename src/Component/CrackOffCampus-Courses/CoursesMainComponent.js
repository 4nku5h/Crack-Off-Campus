import "./styles.css";
import React, { Component } from "react";
import { connect } from 'react-redux';
//Api

import { bindActionCreators } from "redux";
import { fetchCoursesDetails } from "../../redux/actions/actions";

class CoursesMainComponent extends Component {
    //const dispatch = useDispatch();
    //dispatch(fetchCoursesDetails())

    constructor() {
        super();
        this.state = { data: null }
        this.fetchCourses = this.fetchCourses.bind(this);
        this.data = null;
    }

    componentDidMount() {
        this.fetchCourses()
    }

    render() {
        return (
            <div className="CoursesComponent">

                {this.props.coursesDetails.coursesData.map((course) => {
                    return (
                        <div>
                            <img variant="top" style={{width: '40%', borderRadius: "10px", marginLeft: "0" }} src={course.courseImage} />
                            <h2 >{course.courseName}</h2>
                            <h2 >{course.courseTotalQuestions}</h2>
                            <h2 >{course.courseRating}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }

    fetchCourses() {
        this.props.fetchCoursesDetails();
    }
}



function mapStateToProps(state) {
    return { coursesDetails: state.coursesDetails }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCoursesDetails: fetchCoursesDetails }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesMainComponent);