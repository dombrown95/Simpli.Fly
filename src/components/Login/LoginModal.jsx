import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function LoginModal({ show, handleClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
      handleClose(); 
    };
  
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
  
            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
  
            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  
  export default LoginModal;