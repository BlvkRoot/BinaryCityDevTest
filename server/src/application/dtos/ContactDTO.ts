import { ClientDTO } from "./ClientDTO";

export interface ContactDTO {
  name: string;
  surname: string;
  email: string;
  clientIds: string[];
  clients?: ClientDTO[];
  createdAt?: Date;
  updatedAt?: Date;
}