import React from 'react'
import './home.css'
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";
import Loader from './loader/Loader';

const homevariant={
  hidden:{scale:0,opacity:0},
  visible:{scale:1,opacity:1},
  exit:{
    x:"-100vh",
    transition:{ease:'easeInOut'}
  }

}

const Home = () => {

  const arr="I'm Dheeraj".split('');
  var txt="";
  for(let i=0;i<arr.length;i++)
  {
    
    txt+="<h1 className='highlight'>"+arr[i]+"</h1>"

  }
  var parse= require('html-react-parser');

  txt=parse(txt);



  return (
    <>
  <motion.div variants={homevariant} exit="exit" className="home">
    <motion.div variants={homevariant} initial="hidden" animate="visible" transition={{duration:1.5}} className="title">

      {txt}

    </motion.div>
    


    <div className="posts">
      <h1>
      <Typewriter
      options={{
        strings: [
          "Java Developer",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "UI/UX Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </h1>
      
  

    </div>
    <Loader/>
    <div className="about">
    <motion.p whileHover={{scale:1.2}}><a href="/about" className="btn btn-outline">see more about me</a></motion.p>

  
    </div>
  </motion.div>
    
    </>
  )
}

export default Home
