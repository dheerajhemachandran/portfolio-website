import React from 'react'
import './sidebar.css'
import { motion } from 'framer-motion';
import 'font-awesome/css/font-awesome.min.css';

const sidevariant={
  hidden:{width:0,opacity:0},
  visible:{width:60,opacity:1},
  hover:{width:170}
}

const Sidebar = () => {
  return (
    <div>
      <div  className="s-media">
   
   <motion.a variants={sidevariant}  initial="hidden" animate="visible"  whileHover="hover" href="https://www.linkedin.com/in/dheerajh/" className="s-item linkedin">
     <span className="fa fa-linkedin"></span>
   </motion.a>
   
   <motion.a variants={sidevariant}  initial="hidden" animate="visible"  whileHover="hover" href="https://twitter.com/Dheeraj_chan" className="s-item twitter">
     <span className="fa fa-twitter"></span>
   </motion.a>
   

   <motion.a variants={sidevariant}  initial="hidden" animate="visible"  whileHover="hover" href="https://www.instagram.com/dheerajh07/" className="s-item insta">
     <span className="fa fa-instagram"></span>
   </motion.a>
 
 <motion.a variants={sidevariant}  initial="hidden" animate="visible"  whileHover="hover" href="https://github.com/dheerajhemachandran" className="s-item git">
     <span className="fa fa-github"></span>
   </motion.a>


  

</div>

    </div>
  )
}

export default Sidebar
