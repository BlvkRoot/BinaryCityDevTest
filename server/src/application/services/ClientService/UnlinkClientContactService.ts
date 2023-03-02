import { IClientRepository } from "@domain/repositories/ClientRepository/IClientRepository";
import { ObjectId } from "mongoose";
import { inject, injectable } from "tsyringe";

@injectable()
export class UnlinkClientContactService {
  constructor(
    @inject("ClientRepository")
    protected readonly clientRepository: IClientRepository
  ) {}
  public async execute(id: string, contactId: string): Promise<void> {
    const client = await this.clientRepository.getClientById(id as unknown as ObjectId);
    let newContactsLink = client?.contacts?.filter(contact => contact != contactId);
    newContactsLink = newContactsLink?.filter(contact => !!contact);

    this.clientRepository.unlinkContactsById(id as unknown as ObjectId, newContactsLink);
  }
}
