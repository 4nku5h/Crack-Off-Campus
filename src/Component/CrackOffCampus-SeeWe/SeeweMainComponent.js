import './styles.css';
import React from "react";
import image_career from "./../../assets/seewe.svg";
function SeeweMainComponent() {
    return (
        
        <div className="SeeweComponent">
        <img src={image_career} className="JobsComponent_careerImage_svg" alt="Loading" style={{width:"55%"}}></img>
            <h2>See-We Resume Builder (Coming Soon)</h2>
        </div>
    )
}
export default SeeweMainComponent;