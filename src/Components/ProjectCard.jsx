import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{width:'28rem'}} onClick={handleShow}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/70900/screenshots/2957833/programmers-day-banner.gif" width={'100%'} height={'300px'} />
      <Card.Body>
        <Card.Title className='text-center'>Project Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-6">
            <img width={'100%'} src="https://cdn.dribbble.com/users/70900/screenshots/2957833/programmers-day-banner.gif" alt="" />
          </div>
          <div className="col-6 text-center">
              <h2>Project Title</h2>
              <p style={{textAlign:'justify'}}>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum quam blanditiis doloremque minima. Possimus?</p>
              <p>Technology used : <b>React, Node</b></p>
             
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
        <div className='d-flex justify-content-between'>
          <Button className='me-5'><a href=""><FaGithub /></a></Button>
          <Button className='me-5'><a href=""><FaLink /> </a></Button>   
           
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </div>
         
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}


export default ProjectCard