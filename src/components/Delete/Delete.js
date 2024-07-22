import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Delete =  ({ show, handleClose, employee}) =>{
    const handleDelete = () => {
        console.log('Deleting employee:', employee.id);
        handleClose();
    };
return (
<>
<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        Are you sure you want to delete <strong>{employee ? employee.name : ''}</strong>?
      </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleDelete}>
        Confirm Delete
      </Button>
    </Modal.Footer>
  </Modal>
  </>
 );
}

export default Delete;