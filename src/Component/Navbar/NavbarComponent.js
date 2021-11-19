import './styles.css';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSelectdComponent } from '../../redux/actions/actions';
import { HouseFill, CreditCard2FrontFill, BookHalf, FolderSymlinkFill, BriefcaseFill, TvFill, TerminalFill } from 'react-bootstrap-icons';

/// Router
import { Link } from 'react-router-dom';

function NavbarComponent(props) {
    const currentSelectdComponent = useSelector(state => state.currentSelectdComponent);
    const dispatch = useDispatch();

    const icon_Home = useRef(null);
    const icon_JOBS = useRef(null);
    const icon_COURSES = useRef(null);
    const icon_SEEWE = useRef(null);
    const icon_HIRE = useRef(null);
    const icon_PLACEMENT = useRef(null);
    const icon_IDE = useRef(null);
    const underline_Home = useRef(null);
    const underline_JOBS = useRef(null);
    const underline_COURSES = useRef(null);
    const underline_SEEWE = useRef(null);
    const underline_HIRE = useRef(null);
    const underline_PLACEMENT = useRef(null);
    const underline_IDE = useRef(null);


    function handleComponent(name) {
        switch (currentSelectdComponent) {
            case "HOME": {
                icon_Home.current.classList.remove('active');
                underline_Home.current.classList.remove('active');
                break;
            }
            case "JOBS": {
                icon_JOBS.current.classList.remove('active');
                underline_JOBS.current.classList.remove('active');
                break;
            }
            case "COURSES": {
                icon_COURSES.current.classList.remove('active');
                underline_COURSES.current.classList.remove('active');
                break;
            }
            case "SEEWE": {
                icon_SEEWE.current.classList.remove('active');
                underline_SEEWE.current.classList.remove('active');
                break;
            }
            case "HIRE": {
                icon_HIRE.current.classList.remove('active');
                underline_HIRE.current.classList.remove('active');
                break;
            }
            case "PLACEMENT": {
                icon_PLACEMENT.current.classList.remove('active');
                underline_PLACEMENT.current.classList.remove('active');
                break;
            }
            case "IDE": {
                icon_IDE.current.classList.remove('active');
                underline_IDE.current.classList.remove('active');
                break;
            }
        }

        switch (name) {
            case "HOME": {
                icon_Home.current.classList.add('active');
                underline_Home.current.classList.add('active');
                break;
            }
            case "JOBS": {
                icon_JOBS.current.classList.add('active');
                underline_JOBS.current.classList.add('active');
                break;
            }
            case "COURSES": {
                icon_COURSES.current.classList.add('active');
                underline_COURSES.current.classList.add('active');
                break;
            }
            case "SEEWE": {
                icon_SEEWE.current.classList.add('active');
                underline_SEEWE.current.classList.add('active');
                break;
            }
            case "HIRE": {
                icon_HIRE.current.classList.add('active');
                underline_HIRE.current.classList.add('active');
                break;
            }
            case "PLACEMENT": {
                icon_PLACEMENT.current.classList.add('active');
                underline_PLACEMENT.current.classList.add('active');
                break;
            }
            case "IDE": {
                icon_IDE.current.classList.add('active');
                underline_IDE.current.classList.add('active');
                break;
            }
        }
        dispatch(setCurrentSelectdComponent(name));
    }
    useEffect(() => {
        handleComponent("HOME");
    }, [])
    return (
        <div class="Navbar">

            <h3 id="navbar_COC" href="#">Crack Off Campus</h3>


            <Link to="/" id="React_Router_Link" onClick={() => handleComponent("HOME")}>
                <div className="Nav_ITEM_DIV" >
                    <HouseFill className="navbar_icon" ref={icon_Home} />
                    <h5 id="NAV_ITEM_TEXT">Home</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE" ref={underline_Home}></div>

            </Link>

            <Link to="/jobs" id="React_Router_Link" onClick={() => handleComponent("JOBS")}>
                <div className="Nav_ITEM_DIV">
                    <BriefcaseFill className="navbar_icon" ref={icon_JOBS} />
                    <h5 id="NAV_ITEM_TEXT">Jobs</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE" ref={underline_JOBS}></div>
            </Link>

            <Link to="/courses" id="React_Router_Link" onClick={() => handleComponent("COURSES")}>
                <div className="Nav_ITEM_DIV">
                    <BookHalf className="navbar_icon" ref={icon_COURSES} />
                    <h5 id="NAV_ITEM_TEXT">Courses</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE" ref={underline_COURSES}></div>
            </Link>

            <Link to="/seewe" id="React_Router_Link" onClick={() => handleComponent("SEEWE")}>
                <div className="Nav_ITEM_DIV">
                    <CreditCard2FrontFill className="navbar_icon" ref={icon_SEEWE} />
                    <h5 id="NAV_ITEM_TEXT">Seewe</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE" ref={underline_SEEWE}></div>
            </Link>

            <Link to="/hire" id="React_Router_Link" onClick={() => handleComponent("HIRE")}>
                <div className="Nav_ITEM_DIV">
                    <FolderSymlinkFill className="navbar_icon" ref={icon_HIRE} />
                    <h5 id="NAV_ITEM_TEXT">Hire</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE" ref={underline_HIRE}></div>
            </Link>

            <Link to="/placement" id="React_Router_Link" onClick={() => handleComponent("PLACEMENT")}>
                <div className="Nav_ITEM_DIV">
                    <TvFill className="navbar_icon" ref={icon_PLACEMENT} />
                    <h5 id="NAV_ITEM_TEXT">Placement</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE" ref={underline_PLACEMENT}></div>
            </Link>

            <Link to="/compiler" id="React_Router_Link" onClick={() => handleComponent("IDE")}>
                <div className="Nav_ITEM_DIV">
                    <TerminalFill className="navbar_icon" ref={icon_IDE} />
                    <h5 id="NAV_ITEM_TEXT">IDE</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE" ref={underline_IDE}></div>
            </Link>


        </div>
    )
}

export default NavbarComponent;
//                <p onClick={()=>props.data.setLoggenIn(false)}>Logout</p>

