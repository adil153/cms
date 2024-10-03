import React, { useState, useEffect } from 'react';
import { deleteContact, getContact, UpdateContactDetails } from '../services/server';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function ContactCard({ res }) {
  const [currentContact, setCurrentContact] = useState({});
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = (contact) => {
    setCurrentContact(contact);
    setShow(true);
  };

  const handleUpdateContact = async () => {
    const result = await UpdateContactDetails(currentContact.id, currentContact);
    if (result.status === 200) {
      getData();
      console.log("Contact Updated Successfully:", result.data);
      toast.success('Contact updated successfully!');
      handleClose();
    }
  };

  const handleChange = (e) => {
    setCurrentContact({ ...currentContact, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await getContact();
    if (result.status === 200) {
      setData(result.data); //
      
    }
  };

  const removeContact = async (id) => {
    const result = await deleteContact(id);
    if (result.status === 200) {
      toast.success('Contact removed successfully!');
      res(result);
      getData(); 
    } else {
      toast.error('Failed to remove contact.');
    }
  };

  return (
    <>
      <div className='container-fluid '>
        <div className="col  mb-5">
        </div>

        {data.length > 0 ? (
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {data.map(item => (
              <div key={item.id}>
                <Card className='bg-light'>
                  <Card.Img
                    variant="top img"
                    src={item.img}
                    style={{ borderRadius: '5px', height: '300px' }}
                  />
                  <Card.Body className='mt-0'>
                    <ul className='list-group'>
                      <li className='list-group-item list-group-item-action'>
                        Name: <span>{item.name}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Address: <span>{item.address}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Email: <span>{item.email}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Phone: <span>{item.phone}</span>
                      </li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <Link to="#" className='btn btn-light me-1 flex-grow-1' onClick={() => handleShow(item)}>
                      <i className="fa-solid fa-user-pen" style={{color: "blue",}}/>
                    </Link>
                    <button className='btn btn-light flex-grow-1' onClick={() => removeContact(item.id)}>
                      <i className="fa-solid fa-user-minus" style={{color: "red",}} />
                    </button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <h3 className='text-danger'>No Contacts</h3>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={currentContact.name || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhoto">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="img"
                value={currentContact.img || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formAddress" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={currentContact.address || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={currentContact.email || ''}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleUpdateContact}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactCard;
