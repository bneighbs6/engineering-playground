import React from "react";

function Shalaina({message, handleShalainaClick, age}) {

    return (
        <div className="button">
            <button className="btn btn-outline-danger m-4" type="button" onClick={handleShalainaClick}>Shalaina</button>
            {message && <p>Shalaina is {age} years old.</p>}
        </div>
    )
}

export default Shalaina; 