import { ClientDTO } from "@appication/dtos/ClientDTO";
import { IClientRepository } from "@domain/repositories/ClientRepository/IClientRepository";
import { IContactRepository } from "@domain/repositories/ContactRepository/IContactRepository";
import { ObjectId } from "mongoose";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateClientService {
  constructor(
    @inject("ClientRepository")
    protected readonly clientRepository: IClientRepository,
    @inject("ContactRepository")
    protected readonly contactRepository: IContactRepository
  ) {}
  public async execute(clientData: ClientDTO): Promise<void> {
    // link contacts to client if any
    clientData.contacts = (
      await Promise.all(
        clientData.contactIds?.map(
          async (contactId) =>
            await this.contactRepository.getContactById(
              contactId as unknown as ObjectId
            )
        )
      )
    ).filter((contact) => !!contact);
    await this.clientRepository.save(clientData);
  }
}
