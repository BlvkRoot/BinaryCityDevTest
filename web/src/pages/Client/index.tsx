import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Button, Form } from "../../styles";
import TextField from "@mui/material/TextField";
import { api } from "../../services/api";

function Client() {
  const [clientName, setClientName] = useState("");
  const [clientCode, setClientCode] = useState("");

  async function handleSubmitClient(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    api
      .post(`/clients/`, {
        name: clientName,
        clientCode,
        contactIds: [],
      })
      .then((response) => {})
      .catch();
  }

  async function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;
    setClientName(name);

    // Only set client code if name is provided and lenght is greater or equal 2
    if (name.trim() !== "" && name.length >= 2) {
      const { data } = await api.get(`/clients/client-code/${name}`);
      setClientCode(data.clientCode);
    }
  }

  return (
    <Form onSubmit={handleSubmitClient}>
      <h1>Client Form</h1>
      <TextField
        id="standard-basic"
        label="Name"
        variant="outlined"
        required={true}
        onChange={handleNameChange}
        value={clientName}
      />
      <TextField
        id="outlined-basic"
        label="ClientCode"
        variant="outlined"
        disabled={true}
        value={clientCode}
      />
      <Button>Save</Button>
    </Form>
  );
}

export default Client;
