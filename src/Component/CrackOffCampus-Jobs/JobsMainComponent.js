import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from "react";
import JobsList from './JobsList/JobsList';
import JobDetailsFloatComponent from './JobDetailsFloatComponent/JobDetailsFloatComponent';
import JobFilterComponent from './JobFilterComponent/JobFilterComponent';
import image_career from "./../../assets/career_progress_ivdb.svg";
//Redux
import { useDispatch } from 'react-redux';
import { fetchJobsData } from "../../redux/actions/actions";

import { FilterCircleFill } from 'react-bootstrap-icons';


function JobsMainComponent() {
  const dispatch = useDispatch();

  dispatch(fetchJobsData())
  return (
    <div>
      <div className="JobsComponent">
        <div className='JobsComponent_careerImage_div'>
          <JobDetailsFloatComponent />
          <img src={image_career} className="JobsComponent_careerImage_svg" alt="Loading"></img>
        </div>
        <JobsList />
        <JobFilterComponent />
      </div>
    </div>
  )
}
export default JobsMainComponent;

//