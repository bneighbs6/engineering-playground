import React from "react";
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";

function FamilyLocations() {
    return (
        <div className="family-locations">
            <button>Washington</button>
            <button>Nevada</button>
            <button>Montana</button>
            <button>Texas</button>
        </div>
    )
}

export default FamilyLocations;