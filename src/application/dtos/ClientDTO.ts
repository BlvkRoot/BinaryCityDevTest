import { ContactDTO } from "./ContactDTO";

export interface ClientDTO {
  name: string;
  clientCode: string;
  contacts?: ContactDTO[];
  createdAt?: Date;
  updatedAt?: Date;
}