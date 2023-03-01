import { ContactDTO } from "./ContactDTO";

export interface ClientDTO {
  name: string;
  clientCode: string;
  contactIds: string[];
  contacts?: ContactDTO[] | null;
  createdAt?: Date;
  updatedAt?: Date;
}