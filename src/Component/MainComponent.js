import React from "react";
import NavbarComponent from "./Navbar/NavbarComponent";
import JobsComponent from "./CrackOffCampus-Jobs/JobsComponent";
import SeeweComponent from "./CrackOffCampus-SeeWe/SeeWe/SeeweComponent";
import CoursesComponent from "./CrackOffCampus-Courses/Courses/CoursesComponent";
import ReferalComponent from "./CrackOffCampus-Referals/Referals/ReferalComponent";
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function MainComponent() {
    return (
        <Router>
            <NavbarComponent />
            <Switch>
                <Route path="/" exact component={JobsComponent} />
                <Route path="/seewe" exact component={SeeweComponent} />
                <Route path="/courses" exact component={CoursesComponent} />
                <Route path="/referal" exact component={ReferalComponent} />
            </Switch>
        </Router>
    )
}
export default MainComponent;