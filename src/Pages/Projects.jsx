import React from 'react'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <div>
      <h2 className='text-center m-4' > All projects</h2>
      <input type="text"  placeholder='Search By Technology' className='form-control mx-auto w-50 m-5' />
      <div className="row">
        <div className="col m-4">
          <ProjectCard/>
        </div>
      </div>
    </div>
  )
}

export default Projects