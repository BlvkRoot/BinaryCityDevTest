import { ContactDTO } from "@application/dtos/ContactDTO";
import { ObjectId } from "mongoose";

export interface IContactRepository {
  save(contact: ContactDTO): Promise<void>;
  getContactById(contactId: ObjectId): Promise<ContactDTO | null>;
  findContactByEmail(email: string): Promise<ContactDTO | null>;
  list(start: number, end: number): Promise<ContactDTO[]>;
  unlinkClientsById(contactId: ObjectId, newLinkedClients: ObjectId[]): Promise<void>;
}