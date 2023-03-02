import { ContactDTO } from "./ContactDTO";

interface IContactIds {
  value: string;
  label: string;
}
export interface ClientDTO {
  name: string;
  clientCode: string;
  contactIds: IContactIds[];
  contacts?: ContactDTO[] | null;
  createdAt?: Date;
  updatedAt?: Date;
}