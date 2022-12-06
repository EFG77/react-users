import React, { useState } from 'react';
import { Card, Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const EditUsersForm = (props) => {

  const [name, setName] = useState(props.pupil.name);
  const [email, setEmail] = useState(props.pupil.email);
  const [gen, setGen] = useState(props.pupil.gen);

  const handleSubmit = (e) => {
    console.log(props)
    e.preventDefault();


    let replacementData = {
      name: name,
      email: email,
      gen: gen,
      id: uuidv4(),
    };


    props.editUser(props.pupil.id, replacementData); 

    setName("");
    setEmail("");
    setGen(0);


  };


  return (
    <div>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => { setName(e.target.value) }} name="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter e-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicGen">
            <Form.Label>Gen</Form.Label>
            <Form.Control type="number" placeholder="Enter Gen" value={gen} onChange={(e) => { setGen(e.target.value) }} name="gen" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}


export default EditUsersForm;
