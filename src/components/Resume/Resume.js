import React from 'react'
import './resume.css'

const Resume = () => {
  const CV=require('./dheeraj.pdf')
  return (
    <div className='resume'>
      <a href={CV} className="btn btn-outline" download>Download CV</a>
    </div>
  )
}

export default Resume
