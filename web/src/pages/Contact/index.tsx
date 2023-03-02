import React, { useState, useEffect } from "react";
import { Button, Form } from "../../styles";
import TextField from "@mui/material/TextField";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { createContact } from "../../utils/contactApiCalls";
import { notify } from "../../utils/notification";

function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [clientIds, setClientIds] = useState([]);

  const navigate = useNavigate();

  const { isLoading, isSuccess, isError, mutate } = useMutation(createContact, {
    onSuccess: async ({ data: { message, success } }) => {
      // Validate if success is true
      if (success) {
        notify(message);
        navigate("/contacts");
      }
    },
    onError: async ({ response: { data: { errors } } }) => {
      errors?.forEach(error => notify(error));
    },
  });

  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h1 style={{ color: "#970"}}>Contact Form</h1>
        <TextField
          id="standard-basic"
          label="Name"
          variant="outlined"
          required={true}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          id="outlined-basic"
          label="Surname"
          variant="outlined"
          required={true}
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
        />

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <Button
          onClick={() => {
            mutate({
              name,
              surname,
              email,
              clientIds,
            });
          }}
        >
          Save
        </Button>
      </Form>
    </>
  );
}

export default Contact;
