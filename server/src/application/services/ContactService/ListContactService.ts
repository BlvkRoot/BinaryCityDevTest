import { ClientDTO } from "@application/dtos/ClientDTO";
import { ContactDTO } from "@application/dtos/ContactDTO";
import { IClientRepository } from "@domain/repositories/ClientRepository/IClientRepository";
import { IContactRepository } from "@domain/repositories/ContactRepository/IContactRepository";
import { ObjectId } from "mongoose";
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
    return contacts;
  }
}
