import React from "react";

function Everlee({message, handleEverleeClick, age}) {

    return (
        <>
            <div className="button">
                <button className="btn btn-secondary m-4" onClick={handleEverleeClick}>Everlee</button>
                {message && <p>Everlee is {age} year old.</p>}
            </div>
        </>
    )
}

export default Everlee;