import React from 'react'
import './about.css'
import image from './dheeraj.jpg'
import { motion } from 'framer-motion'

const aboutvariant={
  move:{
    x:-10,
    transition:{
      yoyo:Infinity
    }
  },
  left:{
    x:"-200vh"
  },
  right:{
    x:"200vh"
  },
  visible:{
    x:0
  }
}


const About = () => {
  
  return (
    <>
    
<div className="row">
 <motion.div variants={aboutvariant} initial="right" animate="visible" transition={{delay:1}} className="col-lg img-container"><img className='image img-fluid' src={image} height="70%" width="70%" alt="profilepic"/></motion.div>
 <div className="col-lg">
    <motion.h1 variants={aboutvariant} initial="left" animate="visible" transition={{delay:.5}} className='myself'>Myself</motion.h1>
    <motion.p variants={aboutvariant} initial="left" animate="visible" transition={{delay:1.5}} className='content'>
Hi all, I am Dheeraj, I am a Computer Science Engineer and Gamer from India. 
I have more than 5 years of experience in different coding platforms, 
I like to design and build quality software for the seek of challenges.
I created this website to share my experiences and thoughts about being a Software Engineer,
I believe that with stronger concepts and bases, we can grow higher in our careers.
I am passionate about IT architectures and software development at all levels,
from solution design to software implementation. 
I like to solve difficult problems using high technology applying not common solutions.</motion.p>

<motion.p variants={aboutvariant} initial="hidden" animate="move"><a href="/project" className="btn btn-outline">my projects</a></motion.p>
  </div>
</div>


<div className='skills'>
<h1 className="myself">Skills</h1>
<div className="row skill">
  <motion.div whileHover={{x:0,scale:1.2}}  className="col-lg-4"><h3>React</h3></motion.div>
  <div className="col-lg-8">
  <div className="progress">
  <div className="progress-bar React" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  </div>
</div>
<div className="row skill">
  <motion.div whileHover={{x:0,scale:1.2}}  className="col-lg-4"><h3>Python</h3></motion.div>
  <div className="col-lg-8">
  <div className="progress">
  <div className="progress-bar Python" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  </div>
</div>
<div className="row skill">
  <motion.div whileHover={{x:0,scale:1.2}}  className="col-lg-4"><h3>Nodejs</h3></motion.div>
  <div className="col-lg-8">
  <div className="progress">
  <div className="progress-bar Nodejs" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  </div>
</div>
<div className="row skill">
  <motion.div whileHover={{x:0,scale:1.2}}  className="col-lg-4"><h3>AWS</h3></motion.div>
  <div className="col-lg-8">
  <div className="progress">
  <div className="progress-bar AWS" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  </div>
</div>
<div className="row skill">
  <motion.div whileHover={{x:0,scale:1.2}}  className="col-lg-4"><h3>Figma</h3></motion.div>
  <div className="col-lg-8">
  <div className="progress">
  <div className="progress-bar Figma" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  </div>
</div>
<div className="row skill">
  <motion.div whileHover={{x:0,scale:1.2}}  className="col-lg-4"><h3>Tensorflow</h3></motion.div>
  <div className="col-lg-8">
  <div className="progress">
  <div className="progress-bar Tensorflow" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  </div>
</div>

</div>
    </>
  )
}

export default About
