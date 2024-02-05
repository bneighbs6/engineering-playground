import React, { useState, useEffect } from "react";

function Shalaina() {
    const [message, setMessage] = useState(false);
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(28);

    useEffect(() => {
        console.log(`You have pressed Shalaina's button ${count} times and the side effect is this log message! Message Showing? ${message}`)
    }, [message, count])

    const handleShalainaSubmit = () => {
        setMessage(!message);
        setCount(count + 1);
        if (message) {
            setAge(age + 1);
        }
    }

    return (
        <div className="button">
            <button className="btn btn-outline-danger m-4" type="button" onClick={handleShalainaSubmit}>Shalaina</button>
            {message && <p>Shalaina is {age} years old.</p>}
        </div>
    )
}

export default Shalaina; 