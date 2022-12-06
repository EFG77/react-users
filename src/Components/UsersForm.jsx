import React, { useState } from 'react';
import {Card,Form,Button} from "react-bootstrap";
import {v4 as uuid} from "uuid";

const UsersForm = (props) => {

   const [name,setName]= useState("");
    const [email, setEmail]=useState("");
    const[gen, setGen]=useState(0);

    const handleSubmit = (e) => {
      console.log('Handing Submit', e)
        e.preventDefault();


        let newUser={
          name:name,
          email:email,
          gen:gen,
          id:uuid(),
        };

props.addUser(newUser);

setName("")
setEmail("")
setGen(0)

                       };
    
    return (
        <div>
  <Card>
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter e-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}  name="email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicGen">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="number" placeholder="Enter Gen" value={gen} onChange={(e)=>{setGen(e.target.value)}} name="gen"/>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </Form>
    </Card>
        </div>
    );
}


export default UsersForm;







   

    


