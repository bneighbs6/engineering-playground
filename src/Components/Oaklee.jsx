import React, { useState, useEffect } from "react";

function Oaklee({ handleOakleeClick, message, age }) {
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
      <button className="btn btn-danger m-4" onClick={handleOakleeClick}>
        {message ? "Here is Oaklee's age (Reclick to hide)" : "Oaklee"}
      </button>
      {message && (
                    <>
                        <p>Oaklee is {age} years old.</p>
                        {!isLoading && <img src={photo.url} alt={photo.title} />}
                    </>
                )}
    </div>
  );
}

export default Oaklee; 