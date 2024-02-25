import React from "react"

// This fx will create a different header for the top of each web page
function Header(path) {
    if (path="/family-members") {
        return <h3 className="text-center m-4">Click a name to reveal more info</h3>
    } else if (path="/") {
        return <h3 className="text-center m-4">Click a question</h3> 
    }
}

export default Header; 