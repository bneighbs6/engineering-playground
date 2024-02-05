import React, { useState } from "react";

function Oaklee() {
// create useState instance that will set message state to false;
  const [message, setMessage] = useState(false);
// handle click event that sets message state to true when clicked
  const handleOakleeClick = () => {
    setMessage(!message) // setting this to !message will ensure that if message is showing, it will disappear when clicked again
  }

// retunrs Oaklee button that when clicked will return the message
  return (
    <div>
      <button className="btn btn-danger m-4" onClick={handleOakleeClick}>Oaklee</button>
      {message && <p>Oaklee is 4 years old</p>}
    </div>
  );
}

export default Oaklee; 