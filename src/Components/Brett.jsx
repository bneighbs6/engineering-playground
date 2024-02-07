import React, { useEffect, useState } from "react";

function Brett({ handleBrettClick, message, age }) {
    const [photo, setPhoto] = useState({});
  //  const [isLoading, setIsLoading] = useState(true); if you add this back in,
  // you must add !isLoading && to the {<img src={photo.url} alt={photo.title} />}

    useEffect(() => {
        async function loadPhoto() {
            // setIsLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
            const photofromAPI = await response.json();
            setPhoto(photofromAPI[0]);
            // setIsLoading(false);
        }

        loadPhoto();
    }, []);

    return (
        <>
            <div className="button">
                <button className="btn btn-outline-dark m-4" onClick={handleBrettClick}>
                    {message ? "Here is Brett's age (Reclick to hide)" : "Brett"}
                </button>

                {message && (
                    <>
                        <p>Brett is {age} years old.</p>
                        {<img src={photo.url} alt={photo.title} />}
                    </>
                )}
            </div>
        </>
    );
}

export default Brett;