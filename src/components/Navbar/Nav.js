import React from 'react'
import "./nav.css"
import { motion } from 'framer-motion'


const Nav = (props) => {

  const loc=props.location
  const nav={
    about:<a className="nav-link " href="about">
    About</a>,
    resume: <a className="nav-link " href="resume">
    Resume</a>,
    project:<a className="nav-link " href="project">
    Project</a>,
    contact:<a className="nav-link " href="contact">
    Contacts</a>
  }

  if(loc.pathname==="/about"){
    nav.about=null
  }
  if(loc.pathname==="/resume"){
    nav.resume=null
  }
  if(loc.pathname==="/contact"){
    nav.contact=null
  }
  if(loc.pathname==="/project"){
    nav.project=null
  }
  
  return (
<>


    
<motion.nav initial={{y:-200}} animate={{y:5}} transition={{delay:1}} className="navbar navbar-expand-lg">
  <div className="container-fluid">
    
    <a className="navbar-brand" href="/">
    <motion.svg whileHover={{scale:2}}>
      <text x="60" y="60" fill="rgb(255,102,203)">Dh.</text>
    </motion.svg>
    </a>
    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {nav.about}
        {nav.project}
        {nav.resume}
        {nav.contact}
       
        
        
      </div>
    </div>
  </div>
</motion.nav>
    
  </>
  )
}

export default Nav
