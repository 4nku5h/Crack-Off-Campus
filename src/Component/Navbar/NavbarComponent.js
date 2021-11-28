import './styles.css';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSelectdComponent } from '../../redux/actions/actions';
import { HouseFill, CreditCard2FrontFill, BookHalf, FolderSymlinkFill, BriefcaseFill, TvFill, TerminalFill } from 'react-bootstrap-icons';

/// Router
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function NavbarComponent(props) {
    const currentSelectdComponent = useSelector(state => state.currentSelectdComponent);
    const dispatch = useDispatch();
    const location = useLocation();
    const [currentRoute,setCurrentRoute]=useState("/");

    const ref_Home = useRef(null);
    const ref_JOBS = useRef(null);
    const ref_COURSES = useRef(null);
    const ref_SEEWE = useRef(null);
    const ref_HIRE = useRef(null);
    const ref_PLACEMENT = useRef(null);
    const ref_IDE = useRef(null);

    function handleComponent(name) {
        let oldRoute=currentRoute;
        setCurrentRoute(name)
        switch (oldRoute) {
            case "/": {
                ref_Home.current.classList.remove('active');
                break;
            }
            case "/JOBS": {
                ref_JOBS.current.classList.remove('active');
                break;
            }
            case "/COURSES": {
                ref_COURSES.current.classList.remove('active');
                break;
            }
            case "/SEEWE": {
                ref_SEEWE.current.classList.remove('active');
                break;
            }
            case "/HIRE": {
                ref_HIRE.current.classList.remove('active');
                break;
            }
            case "/PLACEMENT": {
                ref_PLACEMENT.current.classList.remove('active');
                break;
            }
            case "/COMPILER": {
                ref_IDE.current.classList.remove('active');
                break;
            }
        }

        switch (name) {
            case "/": {
                ref_Home.current.classList.add('active');
                break;
            }
            case "/JOBS": {
                ref_JOBS.current.classList.add('active');
                break;
            }
            case "/COURSES": {
                ref_COURSES.current.classList.add('active');
                break;
            }
            case "/SEEWE": {
                ref_SEEWE.current.classList.add('active');
                break;
            }
            case "/HIRE": {
                ref_HIRE.current.classList.add('active');
                break;
            }
            case "/PLACEMENT": {
                ref_PLACEMENT.current.classList.add('active');
                break;
            }
            case "/COMPILER": {
                ref_IDE.current.classList.add('active');
                break;
            }
        }
        dispatch(setCurrentSelectdComponent(name));
    }
    useEffect(()=>{
        handleComponent("/")
    },[])
    useEffect(() => {
        handleComponent(location.pathname.toUpperCase())
    }, [location])

    return (
        <div className="Navbar">
            <h3 id="navbar_COC" href="#">Crack Off Campus</h3>
            <Link to="/" className="React_Router_Link" ref={ref_Home}>
                <div className="Nav_ITEM_DIV" >
                    <HouseFill className="navbar_icon"  />
                    <h5 className="NAV_ITEM_TEXT">Home</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE"></div>

            </Link>

            <Link to="/jobs" className="React_Router_Link" ref={ref_JOBS}>
                <div className="Nav_ITEM_DIV" >
                    <BriefcaseFill className="navbar_icon" />
                    <h5 className="NAV_ITEM_TEXT">Jobs</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE"></div>
            </Link>

            <Link to="/courses"  className="React_Router_Link" ref={ref_COURSES} >
                <div className="Nav_ITEM_DIV">
                    <BookHalf className="navbar_icon" />
                    <h5 className="NAV_ITEM_TEXT">Courses</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE"></div>
            </Link>

            <Link to="/seewe" className="React_Router_Link" ref={ref_SEEWE} >
                <div className="Nav_ITEM_DIV">
                    <CreditCard2FrontFill className="navbar_icon" />
                    <h5 className="NAV_ITEM_TEXT">Seewe</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE"></div>
            </Link>

            <Link to="/hire" className="React_Router_Link" ref={ref_HIRE}>
                <div className="Nav_ITEM_DIV">
                    <FolderSymlinkFill className="navbar_icon"/>
                    <h5 className="NAV_ITEM_TEXT">Hire</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE"></div>
            </Link>

            <Link to="/placement" className="React_Router_Link" ref={ref_PLACEMENT}>
                <div className="Nav_ITEM_DIV">
                    <TvFill className="navbar_icon" />
                    <h5 className="NAV_ITEM_TEXT">Placement</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE"></div>
            </Link>

            <Link to="/compiler" className="React_Router_Link" ref={ref_IDE} >
                <div className="Nav_ITEM_DIV">
                    <TerminalFill className="navbar_icon"/>
                    <h5 className="NAV_ITEM_TEXT">IDE</h5>
                </div>
                <div className="NAV_ITEM_UNDERLINE"></div>
            </Link>


        </div>
    )
}

export default NavbarComponent;
//                <p onClick={()=>props.data.setLoggenIn(false)}>Logout</p>

