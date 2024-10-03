import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContact } from '../services/server';
import { toast } from 'react-toastify';

function Add({Sresult}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  const [contact,setContact]=useState({
    name:"",img:"",address:"",email:"",phone:""
  })

  const handleAdd=async()=>{
    console.log(contact);
    const {name,img,address,email,phone}=contact
    if(!name || !img || !address || !email || !phone ){
      toast.warning('enter a valid input')
      
    }
    else{
      const result=await addContact(contact)
      if(result.status==201){
        toast.success('Contact Added!!')
        setContact({
           name:"",img:"",address:"",email:"",phone:""
        })
        handleClose()
        Sresult(result)
      }
      else{
        toast.error('Failed')
        console.log(result)

      }
    }

  }


 
  return (
    <>
      <button className='btn btn-success 'onClick={handleShow}>
      <i className="fa-solid fa-user-plus" style={{color: "#ffffff",}} />
      Add
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header className='p-3'>
          <Modal.Title>Add Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel  controlId="floatingtitle" label="Enter Name" className="mb-3">
    <Form.Control type="text" onChange={(e)=>{setContact({...contact,name:e.target.value})}} placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel  controlId="floatingtitle" label="Add Photo Url" className="mb-3">
    <Form.Control type="link" onChange={(e)=>{setContact({...contact,img:e.target.value})}} placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingtitle" label="Enter Address" className="mb-3">
    <Form.Control type="text" onChange={(e)=>{setContact({...contact,address:e.target.value})}} placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingtitle" label="Enter Email" className="mb-3">
    <Form.Control type="email" onChange={(e)=>{setContact({...contact,email:e.target.value})}} placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingtitle" label="Enter Phone No" className="mb-3">
    <Form.Control type="number" onChange={(e)=>{setContact({...contact,phone:e.target.value})}} placeholder="name@example.com" />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add