import './App.css';
import Header from './Components/web-pages/Header';
import Home from './Components/web-pages/Home';
import FamilyAges from './Components/web-pages/FamilyAges'
import Brett from './Components/family-members/Brett';
import Shalaina from './Components/family-members/Shalaina';
import Oaklee from "./Components/family-members/Oaklee"
import Everlee from './Components/family-members/Everlee';
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
    setMessage({ message, [component]: !message[component] });
    if (message[component]) {
      setAge({ ...age, [component]: age[component] + 1 });
    }
  };
  const handleAgeClick = {

  }
  // Wrapping everything we return within a <Router> component
  // Once you have a <Router> in place, you can use <Route> components to 
  // render or hide components based on the URL path.

  // Wrapping a component with <Route> is similar to wrapping it in an if 
  // statement. If the URL matches the path property of the route, the component will 
  // be rendered.


  return (
    <Router>
      <Routes>

        <Route exact={true} path="/" element={
          <div>
            <Home />
          </div>
        } />

        <Route path="/family-ages" element={
          <FamilyAges />
        }>
        </Route>

        <Route path="/family-members" element={
          <div>
            <Header />
            <Brett />
            <Shalaina />
            <Oaklee />
            <Everlee />
          </div>
        }></Route>
      </Routes>

    </Router>


  );
}

export default App;
