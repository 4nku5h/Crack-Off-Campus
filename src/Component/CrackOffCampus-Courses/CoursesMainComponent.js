import "./styles.css";
import React, { Component } from "react";
import { connect } from 'react-redux';
//Api

import { bindActionCreators } from "redux";
import { fetchCoursesDetails } from "../../redux/actions/actions";
import CourseCardComponent from "./CoursesCardComponent/CoursesCardComponent";
import { Row } from "react-bootstrap";

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
                <Row xs={3}>
                    {this.props.coursesDetails.coursesData.map((course) => {
                        return (
                            <CourseCardComponent {...course} />

                        )
                    })}
                </Row>
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