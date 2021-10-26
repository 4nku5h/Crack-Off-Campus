import React from 'react';
import { HouseFill, CreditCard2FrontFill, BookHalf, FolderSymlinkFill , BriefcaseFill, TvFill, TerminalFill} from 'react-bootstrap-icons';

/// Router
import { Link } from 'react-router-dom';

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
                                <CreditCard2FrontFill style={{ marginRight: "7px" }} id="logo_account" color="#000" size={20} />
                                <a class="nav-link" >Seewe</a>
                            </li>
                        </Link>


                        <Link to="/courses">
                            <li class="nav-item">
                                <BookHalf style={{ marginRight: "7px" }} id="logo_account" color="#000" size={20} />
                                <a class="nav-link">Courses</a>
                            </li>
                        </Link>

                        <Link to="/hire">
                            <li class="nav-item">
                                <FolderSymlinkFill style={{ marginRight: "7px" }} id="logo_account" color="#000" size={20} />
                                <a class="nav-link">Hire</a>
                            </li>
                        </Link>

                        <Link to="/placement">
                            <li class="nav-item">
                                <TvFill style={{ marginRight: "7px" }} id="logo_account" color="#000" size={20} />
                                <a class="nav-link">Placement</a>
                            </li>
                        </Link>

                        <Link to="/compiler">
                            <li class="nav-item">
                                <TerminalFill style={{ marginRight: "7px" }} id="logo_account" color="#000" size={20} />
                                <a class="nav-link">Compiler</a>
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

