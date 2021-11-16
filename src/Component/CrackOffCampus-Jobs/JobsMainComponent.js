import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavbarComponent from '../Navbar/NavbarComponent';
import JobsList from './JobsList/JobsList';
import JobDetailsFloatComponent from './JobDetailsFloatComponent/JobDetailsFloatComponent';
import JobFilterComponent from './JobFilterComponent/JobFilterComponent';

//Api
import { useDispatch } from 'react-redux';
import { fetchJobsData } from "../../redux/actions/actions";


function JobsMainComponent() {
  const dispatch = useDispatch();
  dispatch(fetchJobsData())

  return (
    <div className="JobsComponent">
      {/* Change Below Component for different route*/}
      <div>
        <JobDetailsFloatComponent />
        <div className="flexBox_column">
          <JobsList />
        </div>
        <JobFilterComponent />
      </div>
    </div>
  )
}
export default JobsMainComponent;
//
//<UserDetails  {...props.userDetails} />
//<InformationComponent {...props}/>