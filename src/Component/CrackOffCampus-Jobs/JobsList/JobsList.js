import React from 'react';
import JobCardComponent from '../JobCardComponent/JobCardComponent';

import image_career from "./../../../assets/error.svg";

import { useSelector } from "react-redux";

function JobsList() {
    const data = useSelector(state => state.jobsData);
    const filter_data = useSelector(state => state.jobsFilterData);
    return (
        <div className="jobsList">
            {(filter_data.length > 0) ? (
                filter_data.map((curr) => {
                    return <JobCardComponent {...curr} />
                })
            ) : (
                <div className='jobsList_error'>
                    <img src={image_career} className="JobsComponent_careerImage_svg" alt="Loading"></img>
                    <h1 className='jobsList_error_h1'>No Results found</h1>
                </div>
            )}
        </div>


    )
}

export default JobsList;
