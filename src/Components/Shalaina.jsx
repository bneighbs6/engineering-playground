import React, { useState, useEffect } from "react";

function Shalaina({ message, handleShalainaClick, age }) {
    const [photo, setPhoto] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // creating an asynch function to handle fetch call to jsonplaceholder
                async function loadPhoto() {
                    // make isLoading state = true
                    setIsLoading(true);
                    // create response var that awaits fetch call
                    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
                    // photoFromAPI is the awaited response of jsonplaceholder data
                    const photofromAPI = await response.json();
                    // sets the photo state = photo from API 
                    setPhoto(photofromAPI[0]);
                    // after render, return state of isLoading = false
                    setIsLoading(false);
                }
        
                loadPhoto();
            }, []);
        
    return (
        <div className="button">
            <button className="btn btn-outline-danger m-4" type="button" onClick={handleShalainaClick}>
                {message ? "Here is Shalaina's age (Reclick to hide)" : "Shalaina"}
            </button>
            {message && (
                    <>
                        <p>Shalaina is {age} years old.</p>
                        {!isLoading && <img src={photo.url} alt={photo.title} />}
                    </>
                )}
        </div>
    )
}

export default Shalaina;