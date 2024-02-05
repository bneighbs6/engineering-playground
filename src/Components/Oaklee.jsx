import React, { useState } from "react";

function Oaklee({ handleOakleeClick, message, age }) {


  return (
    <div className="button">
      <button className="btn btn-danger m-4" onClick={handleOakleeClick}>Oaklee</button>
      {message && <p>Oaklee is {age} years old</p>}
    </div>
  );
}

export default Oaklee; 