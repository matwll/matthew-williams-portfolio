import React, { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";
import { validateEmail } from "../utils/validate";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, or message
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (name || email || message === ''){
      setErrorMessage('This field is required')
    }else if (!validateEmail(email)){
      setErrorMessage('Not a valid email');
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  const fieldState = (e) => {
    if (name || email || message === ''){
      setErrorMessage('This field is required')
    }else if (!validateEmail(email)){
      setErrorMessage('Not a valid email');
    }
  };

  return (
    <div>
      <h2>Contact</h2>
      {/*contact form here*/}
      <Form>
        <Form.Group as={Row}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          onBlur={fieldState}
          required
        />
        </Form.Group>
        <Form.Group as={Row}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          onBlur={fieldState}
          required
        />
        </Form.Group>
        <Form.Group as={Row}>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          onBlur={fieldState}
          required
        />
        </Form.Group>
        <Button variant="primary" type="sumbit" onClick={handleFormSubmit}>Submit</Button>
      </Form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
