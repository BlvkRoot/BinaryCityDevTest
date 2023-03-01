import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Button, Form } from "../../styles";
import TextField from "@mui/material/TextField";
import { api } from "../../services/api";
import { createClient } from "../../utils/clientApiCalls";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/notification";

function Client() {
  const [clientName, setClientName] = useState("");
  const [clientCode, setClientCode] = useState("");
  const [contactIds, setContactIds] = useState([]);

  const navigate = useNavigate();

  const { isLoading, isSuccess, isError, mutate } = useMutation(createClient, {
    onSuccess: async ({ data: { message, success } }) => {
      // Validate if success is true
      if (success) {
        notify(message);
        navigate("/clients");
      }
    },
    onError: async ({ response: { data: { errors } } }) => {
      errors?.forEach(error => notify(error));
    },
  });

  async function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    try {
      const name = e.target.value;
      setClientName(name);

      // Only set client code if name is provided and lenght is greater or equal 2
      if (name.trim() !== "" && name.length >= 2) {
        const { data } = await api.get(`/clients/client-code/${name}`);
        setClientCode(data.clientCode);
      }
    } catch (error) {
      notify(`Something went wrong!`);
    }
  }

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
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
        label="Client Code"
        variant="outlined"
        disabled={true}
        required={true}
        value={clientCode}
      />
      <Button
        onClick={() => {
          mutate({
            name: clientName,
            clientCode,
            contactIds,
          });
        }}
      >
        Save
      </Button>
    </Form>
  );
}

export default Client;
