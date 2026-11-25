import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = ({job}) => {
  return (
    <div className="card">
        <div className="top">
          <img src= {job.logo} alt=" 
          logo"/>
          <button>Save<Bookmark size={13} strokeWidth={2.65} /></button>
        </div>
        <div className="center">
           <h3> {job.company} <span>{job.datePosted}</span></h3>
           <h2>{job.role} </h2>
           <div className='tag'>
            <h4>{job.tag1}</h4>
            <h4>{job.tag2}</h4>
           </div>
        </div>
        <div className="bottom"> 
          <div className='tag'>
            <h3>{job.pay}</h3>
            <p>{job.location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card
