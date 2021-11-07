import React from "react";

//Api
import { useDispatch } from 'react-redux';
import { fetchCoursesDetails } from "../../../redux/actions/actions";

function CoursesComponent() {
    const dispatch = useDispatch();
    dispatch(fetchCoursesDetails())
    
    return (
        <div className="CoursesComponent">

            <h2>Courses Component</h2>
        </div>
    )
}
export default CoursesComponent;