import { useRef, useState } from "react";
import image_career from "./../../assets/compiler.svg";
import "./styles.css";

function CompilerMainComponent() {
    return (
        <div className="CompilerComponent">
            <img src={image_career} className="JobsComponent_careerImage_svg" alt="Loading" style={{ width: "50%" }}></img>
            <h1>Crack Off Campus IDE (Coming Soon)</h1>

        </div>
    )
}

export default CompilerMainComponent;