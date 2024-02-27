import React from "react"

// This fx will create a header for the top of each web page
function Header({word}) {
    return <h3 className="text-center m-4">{`Click a ${word}`}</h3> 
}

export default Header; 