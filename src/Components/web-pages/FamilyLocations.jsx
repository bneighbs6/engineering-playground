import React from "react";
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";

function FamilyLocations({ handleStateClick }) {
    return (
        <div className="family-locations">
            <header className="text-center m-4">Where do they live?</header>
            <ul>
                <li><button className="btn btn-success my-4" onClick={() => {console.log('Need to display false on page')}}>Washington</button></li>
                <li><button className="btn btn-primary my-4" onClick={() => {console.log("Need to display false on page")}}>Nevada</button></li>
                <li><button className="btn btn-danger my-4" onClick={() => {console.log("Need to display true on page")}}>Montana</button></li>
                <li><button className="btn btn-warning my-4" onClick={() => {console.log("Need to display false on page")}}>Texas</button></li>
            </ul>
        </div>
    )
}

export default FamilyLocations;