import React, { useState, useEffect } from "react";
import { Button, Form, FormDiv } from "../../styles";
import TextField from "@mui/material/TextField";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { createContact } from "../../utils/contactApiCalls";
import { notify } from "../../utils/notification";
import { listClients } from "../../utils/clientApiCalls";
import MultiSelect from "../../components/MultiSelect";
import {
  Option,
  MultiValue,
  animatedComponents,
  IOptions,
} from "../../components/MultiSelectOption";

function Contact() {
  const navigate = useNavigate();
  const { data, isFetching } = useQuery(["clients"], listClients);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [clientIds, setClientIds] = useState([]);
  const [optionSelected, setOptionSelected] = useState("");
  const [options, setOptions] = useState<IOptions[]>([]);

  const { isLoading, isSuccess, isError, mutate } = useMutation(createContact, {
    onSuccess: async ({ data: { message, success } }) => {
      // Validate if success is true
      if (success) {
        notify(message);
        navigate("/contacts");
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

  useEffect(() => {
    data?.map((client) => {
      setOptions((oldOptions) => [
        ...oldOptions,
        { value: client._id, label: client.name },
      ]);
    });
  }, [data]);

  function handleSelectChange(selected) {
    setOptionSelected(selected);
    setClientIds(selected);
  }

  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h1 style={{ color: "#970" }}>Contact Form</h1>
        <FormDiv>
          <TextField
            id="standard-basic"
            label="Name"
            variant="outlined"
            required={true}
            onChange={(e) => setName(e.target.value)}
            fullWidth={true}
            value={name}
          />
        </FormDiv>
        <FormDiv>
          <TextField
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            required={true}
            onChange={(e) => setSurname(e.target.value)}
            fullWidth={true}
            value={surname}
          />
        </FormDiv>
        <FormDiv>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            fullWidth={true}
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
