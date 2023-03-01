import { ContactDTO } from "@appication/dtos/ContactDTO";
import { ObjectId } from "mongoose";

export interface IContactRepository {
  save(contact: ContactDTO): Promise<void>;
  getContactById(contactId: ObjectId): Promise<ContactDTO | null>;
}