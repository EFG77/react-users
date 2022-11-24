import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';
import { Container,Row } from 'react-bootstrap';


const Users = (props) => {
  let pupils= props.users;
  return (
    <div>
       {" "}
       {pupils.map((item,index)=>{
        return(

            <div key={index}>
            <Container>
              <Row>
          <User user={item}/>{" "}
              </Row>
              </Container>
              </div>
        );

       })} 
    </div>
  );
}

export default Users;

