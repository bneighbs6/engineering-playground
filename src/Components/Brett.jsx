import React, {useState} from "react";

function Brett() {
    const [message, setMessage] = useState(false);

    const handleBrettSubmit = () => {
        setMessage(!message)
    }

    return (
        <>
            <div className="button">
                <button className="btn btn-outline-dark m-4" onClick={handleBrettSubmit}>Brett</button>
                {message && <p>Brett is 28 years old.</p>}
            </div>
        </>
    )
}

export default Brett;