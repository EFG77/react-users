import React, {useState} from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import EditUsersForm from './EditUsersForm';


const User = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleDeleteUser = (e) =>{
    e.preventDefault();
    props.deleteUser(props.user.id);
  }

    let pupil= props.user;



    return (
    <div>
      <Card style={{ width: '16rem' }}>
      <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{pupil.name}</Card.Subtitle>
          <Card.Title>Email</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{pupil.email}</Card.Subtitle>
          <Card.Title>Gen</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{pupil.gen}</Card.Subtitle>
          <Button href="#" onClick={handleShow}>Edit</Button>
          {" "}
          <Button variant="danger"size="sm" onClick={handleDeleteUser}>Delete</Button>{' '}
        </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUsersForm editUser={props.editUser} pupil={pupil} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    );
}

export default User;
