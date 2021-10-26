import React from 'react';
import { HouseFill, MenuButtonWideFill, BookFill, FolderSymlinkFill , BriefcaseFill} from 'react-bootstrap-icons';

/// Router
import { Link } from 'react-router-dom';
import CoursesComponent from '../CrackOffCampus-Courses/Courses/CoursesComponent';
import JobsComponent from '../CrackOffCampus-Jobs/JobsComponent';
import SeeweComponent from '../CrackOffCampus-SeeWe/SeeWe/SeeweComponent';
import ReferalComponent from '../CrackOffCampus-Referals/Referals/ReferalComponent';

function NavbarComponent(props) {
    { console.log(props.data) }
    return (
        <div class="Navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <a class="navbar-brand" href="#">Crack Off Campus</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <Link to="/">
                            <li class="nav-item active" >
                                <HouseFill style={{ marginRight: "7px" }} id="logo_account" color="#000" size={20} />
                                <a class="nav-link">Home</a>
                            </li>

                        </Link>

                        <Link to="/jobs">
                            <li class="nav-item active" >
                                <BriefcaseFill style={{ marginRight: "7px" }} id="logo_account" color="#000" size={20} />
                                <a class="nav-link">Jobs</a>
                            </li>

                        </Link>

                        <Link to="/seewe">
                            <li class="nav-item">
                                <MenuButtonWideFill style={{ marginRight: "7px" }} id="logo_account" color="#000" size={20} />
                                <a class="nav-link" >Seewe</a>
                            </li>
                        </Link>


                        <Link to="/courses">
                            <li class="nav-item">
                                <BookFill style={{ marginRight: "7px" }} id="logo_account" color="#000" size={20} />
                                <a class="nav-link">Courses</a>
                            </li>
                        </Link>

                        <Link to="/referal">
                            <li class="nav-item">
                                <FolderSymlinkFill style={{ marginRight: "7px" }} id="logo_account" color="#000" size={20} />
                                <a class="nav-link">Referal</a>
                            </li>
                        </Link>

                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default NavbarComponent;
//                <p onClick={()=>props.data.setLoggenIn(false)}>Logout</p>

