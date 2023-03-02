import { ContactDTO } from "@appication/dtos/ContactDTO";
import { ObjectId } from "mongoose";

export interface IContactRepository {
  save(contact: ContactDTO): Promise<void>;
  getContactById(contactId: ObjectId): Promise<ContactDTO | null>;
  findContactByEmail(email: string): Promise<ContactDTO | null>;
  list(start: number, end: number): Promise<ContactDTO[] | null>;
  unlinkClientsById(contactId: ObjectId): void;
}