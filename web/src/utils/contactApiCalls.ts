import { api } from "../services/api";

export interface IContact {
  name: string;
  surname: string;
  email: string;
  clientIds: string[];
}

const listContacts = async () => {
  const { data } = await api.get(`/contacts`);

  return data.contacts;
};

const createContact = (newContact: IContact) => {
  return api.post(
    `/contacts`,
    newContact
  );
}

export { listContacts, createContact }