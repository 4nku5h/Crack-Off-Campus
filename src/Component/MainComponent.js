import React from "react";
import NavbarComponent from "./Navbar/NavbarComponent";
import JobsComponent from "./CrackOffCampus-Jobs/JobsComponent";
import SeeweComponent from "./CrackOffCampus-SeeWe/SeeWe/SeeweComponent";
import CoursesComponent from "./CrackOffCampus-Courses/Courses/CoursesComponent";
import ReferalComponent from "./CrackOffCampus-Referals/Referals/ReferalComponent";
import HomeComponent from "./CrackOffCampus-Home/HomeComponent";
import PlacementComponent from "./CrackOffCampus-Placement/PlacementGuaranteed/PlacementComponent";
import CompilerComponent from "./CrackOffCampus-Compiler/CompilerComponent";

//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function MainComponent() {
    return (
        <Router>
            <NavbarComponent />
            <Switch>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/jobs" exact component={JobsComponent} />
                <Route path="/seewe" exact component={SeeweComponent} />
                <Route path="/courses" exact component={CoursesComponent} />
                <Route path="/hire" exact component={ReferalComponent} />
                <Route path="/placement" exact component={PlacementComponent} />
                <Route path="/compiler" exact component={CompilerComponent} />
            </Switch>
        </Router>
    )
}
export default MainComponent;