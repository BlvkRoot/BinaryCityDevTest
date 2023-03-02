import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Button, Form, FormDiv } from "../../styles";
import TextField from "@mui/material/TextField";
import { api } from "../../services/api";
import { createClient } from "../../utils/clientApiCalls";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/notification";
import MultiSelect from "../../components/MultiSelect";
import {
  Option,
  MultiValue,
  animatedComponents,
  IOptions,
} from "../../components/MultiSelectOption";
import { listContacts } from "../../utils/contactApiCalls";

function Client() {
  const navigate = useNavigate();
  const { data, isFetching } = useQuery(["contacts"], listContacts);
  const [clientName, setClientName] = useState("");
  const [clientCode, setClientCode] = useState("");
  const [contactIds, setContactIds] = useState([]);
  const [optionSelected, setOptionSelected] = useState("");
  const [options, setOptions] = useState<IOptions[]>([]);

  useEffect(() => {
    data?.map((contact) => {
      setOptions((oldOptions) => [
        ...oldOptions,
        { value: contact._id, label: contact.name },
      ]);
    });
  }, [data]);

  const { isLoading, isSuccess, isError, mutate } = useMutation(createClient, {
    onSuccess: async ({ data: { message, success } }) => {
      // Validate if success is true
      if (success) {
        notify(message);
        navigate("/clients");
      }
    },
    onError: async ({
      response: {
        data: { errors },
      },
    }) => {
      errors?.forEach((error) => notify(error));
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

  function handleSelectChange(selected) {
    setOptionSelected(selected);
    setContactIds(selected);
  }

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <h1>Client Form</h1>
      <FormDiv>
        <TextField
          id="standard-basic"
          label="Name"
          variant="outlined"
          required={true}
          onChange={handleNameChange}
          fullWidth={true}
          value={clientName}
        />
      </FormDiv>
      <FormDiv>
        <TextField
          id="outlined-basic"
          label="Client Code"
          variant="outlined"
          disabled={true}
          required={true}
          fullWidth={true}
          value={clientCode}
        />
      </FormDiv>
      <FormDiv>
        <MultiSelect
          options={options}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{ Option, MultiValue, animatedComponents }}
          onChange={handleSelectChange}
          allowSelectAll={true}
          value={optionSelected}
        />
      </FormDiv>
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
