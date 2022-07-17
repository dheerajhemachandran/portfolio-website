import React from 'react'
import {  Switch, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Nav from './components/Navbar/Nav';
import Resume from './components/Resume/Resume';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar';

import { AnimatePresence } from 'framer-motion';

import './app.css'


const App = () => {
  const loc=useLocation()
  return (
    
      <div className="App">
        <Nav location={loc}/>
        <div className='box'>
          <AnimatePresence>
        <Switch location={loc} key={loc.key}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
        </AnimatePresence>
        </div>
        <Sidebar />
        
      </div>
  )
}

export default App
