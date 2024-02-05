import React, { useEffect } from "react";

function Shalaina({ message, handleShalainaClick, age }) {

    // useEffect(())

    return (
        <div className="button">
            <button className="btn btn-outline-danger m-4" type="button" onClick={handleShalainaClick}>
                {message ? "Here is Shalaina's age (Reclick to hide)" : "Shalaina"}
            </button>
            {message && <p>Shalaina is {age} years old.</p>}
        </div>
    )
}

export default Shalaina;