import React from "react";
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <div className="header-title text-center">
                <h1>Neighbors Family Information</h1>
                {<Header word="question" />}
            </div>
            <ol>
            <li>
                    <p><strong>Who Belongs to the Neighbors Family?</strong></p>
                    <Link to="/family-members" className="my-4">
                        <button className="btn btn-outline-primary">Family Members</button>
                    </Link>
                </li>
                <li className="my-4">
                    <p><strong>How Old Is Neighbors Family?</strong></p>
                    <Link to="/family-ages" className="my-4">
                        <button className="btn btn-outline-primary">Family Ages</button>
                    </Link>
                </li>
                <li className="my-4">
                    <p><strong>Where does the Neighbors family live?</strong></p>
                    <Link to="/family-locations" className="my-4">
                        <button className="btn btn-outline-primary">Family Location</button>
                    </Link>
                </li>
            </ol>
        </div>
    )
}

export default Home; 