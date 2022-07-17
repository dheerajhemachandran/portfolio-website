import React from 'react'
import './project.css'
import cp from "./cp.png"
import fb from "./fb.jpeg"
import fd from "./fd.jpeg"
import pn from "./pn.jpeg"
import { motion } from 'framer-motion'

const cardvariant={
    scaleup:{
        scale:1.1
    },
    hidden:{
        opacity:0,
        transition:{duration:2}
    },
    visible:{
        opacity:1
    }
}
const Projects = () => {


  return (
    <div className='project'>
      <div className="container">
<div className="row">
        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <motion.div variants={cardvariant} initial="hidden" animate="visible" whileHover="scaleup" className="card service-wrapper rounded border-0 shadow p-4">
                 <img className="img-edit" src={cp} alt="color-palette"/>
                   
                <div className="content mt-4">
                    <h5 className="title">Color Palette</h5>
                    <p className="text-muted mt-3 mb-0">A website that can generate random colour palette

</p>
                    <div className="mt-3">
                        
                        <a href="https://dheerajhemachandran.github.io/color-palette/">
                        <button className='btn btn-primary'>Read More</button>
                    </a></div>
                </div>
                
            </motion.div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <motion.div variants={cardvariant} initial="hidden" animate="visible" whileHover="scaleup" className="card service-wrapper rounded border-0 shadow p-4">
                 <img className="img-edit" src={fb} img="fb" alt="fb"/>
                   
                <div className="content mt-4">
                    <h5 className="title">Flappy Bird</h5>
                    <p className="text-muted mt-3 mb-0">a flappy bird game clone website using vanilla java script</p>
                    <div className="mt-3">
                    <a href="https://dheerajhemachandran.github.io/flappybird/">
                        <button className='btn btn-primary'>Read More</button>
                    </a> </div>
                </div>
                
            </motion.div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <motion.div  variants={cardvariant} initial="hidden" animate="visible" whileHover="scaleup" className="card service-wrapper rounded border-0 shadow p-4">
                 <img className="img-edit" src={fd} alt="fd" />
                   
                <div className="content mt-4">
                    <h5 className="title">Face Detection</h5>
                    <p className="text-muted mt-3 mb-0">A face detection app using opencv2 library in python</p>
                    <div className="mt-3">
                    <a href="https://github.com/dheerajhemachandran/face-detection">
                        <button className='btn btn-primary'>Read More</button>
                    </a> </div>
                </div>
                
            </motion.div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <motion.div variants={cardvariant} initial="hidden" animate="visible" whileHover="scaleup" className="card service-wrapper rounded border-0 shadow p-4">
                 <img className="img-edit" src={pn} alt="pn"/>
                   
                <div className="content mt-4">
                    <h5 className="title">Python Notes</h5>
                    <p className="text-muted mt-3 mb-0">A notes managing website developed with python</p> <div className="mt-3">
                    <a href="https://dheeraj-python-notes.herokuapp.com/">
                        <button className='btn btn-primary'>Read More</button>
                    </a> </div>
                </div>
                
            </motion.div>
        </div>
        </div>
    </div>
    </div>



      
  )
}

export default Projects
