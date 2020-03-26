import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './contents/Home';
// import About from './contents/About';
import Education from './contents/Education';
import Projects from './contents/Projects';
import Resume from './contents/Resume';
import Navbar from './components/Navbar';  

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />

    {/* Route for Home.js contents */}

    <Route exact path="/home">
      <Home />
    </Route>

    {/* Route for About.js contents

    <Route path="/about">
      <About />
    </Route> */}

    {/* Route for Education.js contents */}

    <Route path="/education">
      <Education />
    </Route>

    {/* Route for Projects.js contents */}

    <Route path="/projects">
      <Projects />
    </Route>

    {/* Route for Resume.js contents */}

    <Route path="/resume">
      <Resume />
    </Route>

    </div>
    </Router>
    )
    }

export default App;
