import { ClientDTO } from "./ClientDTO";

export interface ContactDTO {
  name: string;
  surname: string;
  email: string;
  clients?: ClientDTO[];
  createdAt?: Date;
  updatedAt?: Date;
}