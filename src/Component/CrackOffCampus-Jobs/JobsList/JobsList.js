import React from 'react';
import JobCardComponent from '../JobCardComponent/JobCardComponent';

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
               <h1>No result Found</h1>
            )}
        </div>


    )
}

export default JobsList;
