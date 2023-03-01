import { ContactDTO } from "@appication/dtos/ContactDTO";
import { IContactRepository } from "@domain/repositories/ContactRepository/IContactRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateContactService {
  constructor(
    @inject("ContactRepository")
    protected readonly contactRepository: IContactRepository
  ) {}
  public async execute(contactData: ContactDTO): Promise<void> {
    await this.contactRepository.save(contactData);
  }
}
