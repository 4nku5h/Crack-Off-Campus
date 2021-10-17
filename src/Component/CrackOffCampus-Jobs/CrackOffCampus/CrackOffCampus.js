import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavbarComponent from '../../Navbar/NavbarComponent';
import JobsList from '../JobsList/JobsList';
import JobDetailsFloatComponent from '../JobDetailsFloatComponent/JobDetailsFloatComponent';
import JobFilterComponent from '../JobFilterComponent/JobFilterComponent';
function CrackOffCampus() {
  return (
    <div className="CrackOffCampus">
      {/* NavBar should be same for the whole website */}
      <NavbarComponent />

      {/* Change Below Component for different routee*/}
      <div>
        <JobDetailsFloatComponent />
        <div className="flexBox_column">
          <JobsList />
        </div>
        <JobFilterComponent/>
      </div>
    </div>
  )
}
export default CrackOffCampus;
//
//<UserDetails  {...props.userDetails} />
//<InformationComponent {...props}/>