import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
      <div className='container-fluid '>
        <Row>
          <Col className='d-flex flex-column justify-content-center'>
            <img src="https://cdn2.iconfinder.com/data/icons/flat-illustrations-1/550/Online_Contacts-512.png" alt="" />
          </Col>
          <Col>
            <h1 className='text-primary fw-light mt-5' style={{ fontSize: '60px' }}>Contact<br /> Management <br />System</h1>
            <p className='fw-light'>A contact management system helps users efficiently organize and manage their contacts. With 
              features for adding, deleting, and editing contact information, it streamlines access to important details, enhancing 
              communication and networking. This tool is invaluable for both personal and professional relationship management.
               </p>
            <Link to={'/dash'} className='text-white btn btn-primary rounded-pill'>Click Here</Link>
          </Col>
        </Row>
      </div>
    </>)
}

export default Landing