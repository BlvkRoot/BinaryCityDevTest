import { IContactRepository } from "@domain/repositories/ContactRepository/IContactRepository";
import { ObjectId } from "mongoose";
import { inject, injectable } from "tsyringe";

@injectable()
export class UnlinkContactClientService {
  constructor(
    @inject("ContactRepository")
    protected readonly contactRepository: IContactRepository
  ) {}
  public async execute(id: string, clientId: string): Promise<void> {
    const contact = await this.contactRepository.getContactById(id as unknown as ObjectId);
    let newClientsLink = contact?.clients?.filter(client => client != clientId);
    newClientsLink = newClientsLink?.filter(client => !!client);

    this.contactRepository.unlinkClientsById(id as unknown as ObjectId, newClientsLink);
  }
}
