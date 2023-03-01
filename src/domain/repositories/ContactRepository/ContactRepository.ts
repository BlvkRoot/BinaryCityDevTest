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

  public findContactByEmail(email: string): Promise<ContactDTO | null> {
    return ContactModel.findOne({ email });
  }

  public list(start: number, end: number): Promise<ContactDTO[] | null> {
    return ContactModel.find({ }).skip(start).limit(end);
  }
}
