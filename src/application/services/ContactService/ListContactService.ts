import { ContactDTO } from "@appication/dtos/ContactDTO";
import { IClientRepository } from "@domain/repositories/ClientRepository/IClientRepository";
import { IContactRepository } from "@domain/repositories/ContactRepository/IContactRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListContactService {
  constructor(
    @inject("ContactRepository")
    protected readonly contactRepository: IContactRepository,
    @inject("ClientRepository")
    protected readonly clientRepository: IClientRepository
  ) {}
  public async execute(
    startPosition: number,
    endPosition: number
  ): Promise<ContactDTO[] | null> {
    const contacts = await this.contactRepository.list(
      startPosition,
      endPosition
    );
    for (const contact of contacts) {
      contact.clients = await Promise.all(
        contact.clients?.map(
          async (clientId) =>
            await this.clientRepository.getClientById(
              clientId as unknown as ObjectId
            )
        )
      );
    }
    return contacts;
  }
}
