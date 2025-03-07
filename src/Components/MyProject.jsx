import React from 'react'
import AddProject from './AddProject'
import { FaGithub } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaLink } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
function MyProject() {
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h3 className='ms-5'>My Projects</h3>
            <AddProject/>
        </div>
        <div className='row shadow m-4 p-5'>
                <div className="col-6">
                    <h4>Project Title</h4>
                </div>
                <div className="col-6 d-flex justify-content-evenly">
                    <button className='btn'><FaGithub /></button>
                    <button className='btn'><FaEdit /></button>
                    <button className='btn'><RiDeleteBin6Line /></button>
                </div>
        </div>
    </div>
  )
}

export default MyProject