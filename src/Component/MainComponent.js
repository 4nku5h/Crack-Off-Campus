import React from "react";
import NavbarComponent from "./Navbar/NavbarComponent";
import JobsMainComponent from "./CrackOffCampus-Jobs/JobsMainComponent";
import SeeweMainComponent from "./CrackOffCampus-SeeWe/SeeweMainComponent";
import CoursesMainComponent from "./CrackOffCampus-Courses/CoursesMainComponent";
import HireMainComponent from "./CrackOffCampus-Hire/HireMainComponent";
import HomeMainComponent from "./CrackOffCampus-Home/HomeMainComponent";
import PlacementMainComponent from "./CrackOffCampus-Placement/PlacementMainComponent";
import CompilerMainComponent from "./CrackOffCampus-Compiler/CompilerMainComponent";

//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function MainComponent() {
    return (
        <Router>
            <NavbarComponent />
            <Switch>

                <Route path="/jobs" exact component={JobsMainComponent} />
                <Route path="/seewe" exact component={SeeweMainComponent} />
                <Route path="/courses" exact component={CoursesMainComponent} />
                <Route path="/hire" exact component={HireMainComponent} />
                <Route path="/placement" exact component={PlacementMainComponent} />
                <Route path="/compiler" exact component={CompilerMainComponent} />
                <Route path="/" component={HomeMainComponent} />
            </Switch>
        </Router>
    )
}
export default MainComponent;