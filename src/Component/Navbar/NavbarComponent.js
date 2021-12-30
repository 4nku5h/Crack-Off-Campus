import './styles.css';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSelectdComponent } from '../../redux/actions/actions';
import { List, HouseFill, CreditCard2FrontFill, BookHalf, FolderSymlinkFill, BriefcaseFill, TvFill, TerminalFill } from 'react-bootstrap-icons';

/// Router
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { is } from 'express/lib/request';

function NavbarComponent(props) {
    const currentSelectdComponent = useSelector(state => state.currentSelectdComponent);
    const dispatch = useDispatch();
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState("/");
    const [isMenuVisible, setMenuVisible] = useState(false);

    const ref_Home = useRef(null);
    const ref_JOBS = useRef(null);
    const ref_COURSES = useRef(null);
    const ref_SEEWE = useRef(null);
    const ref_HIRE = useRef(null);
    const ref_PLACEMENT = useRef(null);
    const ref_IDE = useRef(null);

    const ref_Menu = useRef(null);

    const ref_Navbar_Collapse = useRef(null);

    function handleComponent(name) {
        toggleMenu(false)
        let oldRoute = currentRoute;
        setCurrentRoute(name)
        switch (oldRoute) {
            case "/": {
                ref_Home.current.classList.remove('active');
                break;
            }
            case "/CRACK-OFF-CAMPUS": {
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
            case "/CRACK-OFF-CAMPUS": {
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
    function attachMenuEvent(){
        ref_Menu.current.addEventListener('click', () => {
            setMenuVisible((pre)=>{
                if(pre==true){
                    toggleMenu(true)
                    return false;
                }
                 else{
                    toggleMenu(false)
                    return true;
                 }
            })
        })
    }
    function toggleMenu(val){
        if(val==true){
            ref_Navbar_Collapse.current.classList.add('active')
        }
         else{
            ref_Navbar_Collapse.current.classList.remove('active')
         }
    }

    useEffect(()=>{
        //Component did mount
        attachMenuEvent()
    },[])

    useEffect(() => {
        handleComponent(location.pathname.toUpperCase())
    }, [location])

    return (
        <div className="Navbar">

            <div className="NavBar_Title">
                <List className="NavBar_Menu" ref={ref_Menu} />
                <h3 id="navbar_COC" href="#">Crack Off Campus</h3>
            </div>

            <div className="NavBar_Collapse" ref={ref_Navbar_Collapse}>
                <Link to="/" className="React_Router_Link" ref={ref_Home}>
                    <div className="Nav_ITEM_DIV" >
                        <HouseFill className="navbar_icon" />
                        <h5 className="NAV_ITEM_TEXT">Home</h5>
                    </div>

                </Link>

                <Link to="/jobs" className="React_Router_Link" ref={ref_JOBS}>
                    <div className="Nav_ITEM_DIV" >
                        <BriefcaseFill className="navbar_icon" />
                        <h5 className="NAV_ITEM_TEXT">Jobs</h5>
                    </div>
                </Link>

                <Link to="/courses" className="React_Router_Link" ref={ref_COURSES} >
                    <div className="Nav_ITEM_DIV">
                        <BookHalf className="navbar_icon" />
                        <h5 className="NAV_ITEM_TEXT">Courses</h5>
                    </div>
                </Link>

                <Link to="/seewe" className="React_Router_Link" ref={ref_SEEWE} >
                    <div className="Nav_ITEM_DIV">
                        <CreditCard2FrontFill className="navbar_icon" />
                        <h5 className="NAV_ITEM_TEXT">Seewe</h5>
                    </div>
                </Link>

                <Link to="/hire" className="React_Router_Link" ref={ref_HIRE}>
                    <div className="Nav_ITEM_DIV">
                        <FolderSymlinkFill className="navbar_icon" />
                        <h5 className="NAV_ITEM_TEXT">Hire</h5>
                    </div>
                </Link>

                <Link to="/placement" className="React_Router_Link" ref={ref_PLACEMENT}>
                    <div className="Nav_ITEM_DIV">
                        <TvFill className="navbar_icon" />
                        <h5 className="NAV_ITEM_TEXT">Placement</h5>
                    </div>
                </Link>

                <Link to="/compiler" className="React_Router_Link" ref={ref_IDE} >
                    <div className="Nav_ITEM_DIV">
                        <TerminalFill className="navbar_icon" />
                        <h5 className="NAV_ITEM_TEXT">IDE</h5>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default NavbarComponent;
//                <p onClick={()=>props.data.setLoggenIn(false)}>Logout</p>

