import './styles.css';
import React from "react";
import image_career from "./../../assets/placement.svg";

function PlacementMainComponent() {
    return (
        <div className="PlacementComponent">
            <img src={image_career} className="JobsComponent_careerImage_svg" alt="Loading" style={{width:"50%"}}></img>  
            <h2> Guaranteed Placement (Coming Soon)</h2>
        </div>
    )
}
export default PlacementMainComponent;