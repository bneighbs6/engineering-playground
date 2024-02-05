import './App.css';
import Header from './Components/Header';
import Brett from './Components/Brett';
import Shalaina from './Components/Shalaina';
import Oaklee from "./Components/Oaklee"
import Everlee from './Components/Everlee';
import React, {useState} from "react"


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
const handleClick = (component) => {
  setMessage({ ...message, [component]: !message[component] });
  if (message[component]) {
    setAge({ ...age, [component]: age[component] + 1 });
  }

};
  return (
    <div>
      <Header />
      <Brett
        age={age.brett}
        message={message.brett}
        handleBrettClick={() => handleClick("brett")}
      />
      <Shalaina
      age={age.shalaina}
        message={message.shalaina}
        handleShalainaClick={() => handleClick("shalaina")}
      />
      <Oaklee
      age={age.oaklee}
        message={message.oaklee}
        handleOakleeClick={() => handleClick("oaklee")}
      />
      <Everlee
        age={age.everlee}
        message={message.everlee}
        handleEverleeClick={() => handleClick("everlee")}
      />
    </div>

  );
}

export default App;
