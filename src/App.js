import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Brett from './Components/Brett';
import Shalaina from './Components/Shalaina';
import Oaklee from "./Components/Oaklee"
import Everlee from './Components/Everlee';
import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  // Lifting state up to App (parent component) to be passed down to child components 

  // create useState instance that will set message state to false;
  const [message, setMessage] = useState(false);

  // useState instance setting age to an empty object
  const [age, setAge] = useState({
    brett: 28,
    shalaina: 28,
    oaklee: 4,
    everlee: 1
  });

  // handle click event that sets message state to true when clicked
  // Creates new message starting w/ ...message
  const handlePersonClick = (component) => {
    setMessage({ ...message, [component]: !message[component] });
    if (message[component]) {
      setAge({ ...age, [component]: age[component] + 1 });
    }

    const handleAgeClick = {

    }
    // Wrapping everything we return within a <Router> component
    // Once you have a <Router> in place, you can use <Route> components to 
    // render or hide components based on the URL path.

    // Wrapping a component with <Route> is similar to wrapping it in an if 
    // statement. If the URL matches the path property of the route, the component will 
    // be rendered.

  };
  return (
    <Router>
      <Routes>
        <Route element={<Header />} />
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/family-ages" element={
          <div>
            <Brett
              age={age.brett}
              message={message.brett}
              handleBrettClick={() => handlePersonClick("brett")}
            />
            <Shalaina
              age={age.shalaina}
              message={message.shalaina}
              handleShalainaClick={() => handlePersonClick("shalaina")}
            />
            <Oaklee
              age={age.oaklee}
              message={message.oaklee}
              handleOakleeClick={() => handlePersonClick("oaklee")}
            />
            <Everlee
              age={age.everlee}
              message={message.everlee}
              handleEverleeClick={() => handlePersonClick("everlee")}
            />
          </div>
        }>
        </Route>
      </Routes>

    </Router>


  );
}

export default App;
