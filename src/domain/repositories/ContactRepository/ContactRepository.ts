import { ContactModel } from "@domain/models/Contact";
import { ObjectId } from "mongoose";
import { ContactDTO } from "./../../../application/dtos/ContactDTO";
import { IContactRepository } from "./IContactRepository";

export class ContactRepository implements IContactRepository {
  public async save(contactData: ContactDTO): Promise<void> {
    const contact = new ContactModel(contactData);
    await contact.save();
  }

  public getContactById(contactId: ObjectId): Promise<ContactDTO | null> {
    return ContactModel.findOne({ _id: contactId });
  }
}
