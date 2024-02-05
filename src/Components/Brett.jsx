import React from "react";

function Brett({ handleBrettClick, message, age }) {
    return (
        <>
            <div className="button">
                <button className="btn btn-outline-dark m-4" onClick={handleBrettClick}>
                    {message ? "Here is Brett's age (Reclick to hide)" : "Brett"}
                </button>

                {message && <p>Brett is {age} years old.</p>}
            </div>
        </>
    );
}

export default Brett;