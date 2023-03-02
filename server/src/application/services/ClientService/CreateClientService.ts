import { ClientDTO } from "@application/dtos/ClientDTO";
import { ContactDTO } from "@application/dtos/ContactDTO";
import { IClientRepository } from "@domain/repositories/ClientRepository/IClientRepository";
import { IContactRepository } from "@domain/repositories/ContactRepository/IContactRepository";
import ErrorsApp from "@shared/errors/ErrorsApp";
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
    const clientExists = await this.clientRepository.findClientByCode(
      clientData.clientCode
    );

    if (clientExists)
      throw new ErrorsApp(`ClientCode ${clientData.clientCode} already exists`);

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
    ).filter((contact) => !!contact) as ContactDTO[];
    await this.clientRepository.save(clientData);
  }
}
