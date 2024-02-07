import React from "react";
import Header from "./Header";
import {useNavigate, Link} from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <div className="header-title text-center">
                <h1>Neighbors Family Shits & Gigs</h1>
            </div>
            <div className="header">
                <Header />
            </div>
            <form>
                <ol>
                    <li>
                        How Old Is Neighbors Family? 
                    <Link to="/family-ages">
                       <button>Click Here</button>
                    </Link>
                    </li>
                    
                </ol>
            </form>

        </div>
    )
}

export default Home; 