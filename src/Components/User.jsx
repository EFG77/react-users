import React from 'react';
import { Card, Button } from 'react-bootstrap';

const User = (props) => {

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
        <Card.Link href="#">Card Link</Card.Link>
        <Button variant="danger">Danger</Button>{' '}
      </Card.Body>
    </Card>
        </div>
    );
}

export default User;
