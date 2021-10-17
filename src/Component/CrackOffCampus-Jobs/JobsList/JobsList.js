import React from 'react';
import JobCardComponent from '../JobCardComponent/JobCardComponent';

import { useSelector } from "react-redux";

function JobsList() {
    const data=useSelector(state=>state.jobsData);
    return (
        <div className="jobsList"> 
            {data.jobs.map((curr)=>{
            return <JobCardComponent {...curr}/>
           })}

        </div>
          
        
    )
}

export default JobsList;