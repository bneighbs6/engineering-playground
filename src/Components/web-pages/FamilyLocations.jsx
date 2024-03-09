import React from "react";
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";

function FamilyLocations({ handleStateClick }) {
    return (
        <div className="family-locations">
            <header className="text-center m-4">Where do they live?</header>
            <ul>
                <li><button className="btn btn-primary" onClick={() => {return "False"}}>Washington</button></li>
                <li><button className="btn btn-warning">Nevada</button></li>
                <li><button className="btn btn-outline-danger">Montana</button></li>
                <li><button className="btn btn-outline-warning">Texas</button></li>
            </ul>
        </div>
    )
}

export default FamilyLocations;