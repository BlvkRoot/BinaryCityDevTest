import { ClientDTO } from "./ClientDTO";

interface IClientIds {
  value: string;
  label: string;
}
export interface ContactDTO {
  name: string;
  surname: string;
  email: string;
  clientIds: IClientIds[];
  clients?: ClientDTO[];
  createdAt?: Date;
  updatedAt?: Date;
}