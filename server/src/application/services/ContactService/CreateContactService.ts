import { ClientDTO } from "@application/dtos/ClientDTO";
import { ContactDTO } from "@application/dtos/ContactDTO";
import { IClientRepository } from "@domain/repositories/ClientRepository/IClientRepository";
import { IContactRepository } from "@domain/repositories/ContactRepository/IContactRepository";
import ErrorsApp from "@shared/errors/ErrorsApp";
import { ObjectId } from "mongoose";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateContactService {
  constructor(
    @inject("ContactRepository")
    protected readonly contactRepository: IContactRepository,
    @inject("ClientRepository")
    protected readonly clientRepository: IClientRepository
  ) {}
  public async execute(contactData: ContactDTO): Promise<void> {
    const contactExists = await this.contactRepository.findContactByEmail(
      contactData.email
    );

    if (contactExists)
      throw new ErrorsApp(`Contact ${contactData.email} already exists`);
    
    // link clients to contact if any
    contactData.clients = (
      await Promise.all(
        contactData.clientIds?.map(
          async (client) =>
            await this.clientRepository.getClientById(
              client.value as unknown as ObjectId
            )
        )
      )
    ).filter((client) => !!client) as ClientDTO[];
    await this.contactRepository.save(contactData);
  }
}
