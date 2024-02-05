import React, { useState } from "react";

function Everlee() {
    const [message, setMessage] = useState(false);

    const handleEverleeSubmit = () => {
        setMessage(!message) // setting this to !message will ensure that if message is showing, it will disappear when clicked again
    }

    return (
        <>
            <div className="button">
                <button className="btn btn-secondary m-4" onClick={handleEverleeSubmit}>Everlee</button>
                {message && <p>Everlee is one year old.</p>}
            </div>
        </>
    )
}

export default Everlee;