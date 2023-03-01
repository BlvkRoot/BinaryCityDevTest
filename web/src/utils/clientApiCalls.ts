import { api } from "../services/api";

export interface IClient {
  name: string;
  clientCode: string;
  contactIds: string[];
}

const listClients = async () => {
  const { data } = await api.get(`/clients`);

  return data.clients;
};

const createClient = (newClient: IClient) => {
  return api.post(
    `/clients`,
    newClient
  );
}

export { listClients, createClient }