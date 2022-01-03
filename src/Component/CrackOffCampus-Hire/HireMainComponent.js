import './styles.css';
import React from "react";

import image_career from "./../../assets/hire.svg";
function HireMainComponent() {
    return (
        <div className="HireMainComponent">

            <img src={image_career} className="JobsComponent_careerImage_svg" alt="Loading" style={{width:"40%"}}></img>  
            <h2>Get Referal From Us  (Coming Soon)</h2>
        </div>
    )
}
export default HireMainComponent;