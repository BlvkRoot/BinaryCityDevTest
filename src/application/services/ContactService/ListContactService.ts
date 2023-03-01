import { ContactDTO } from "@appication/dtos/ContactDTO";
import { IContactRepository } from "@domain/repositories/ContactRepository/IContactRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListContactService {
  constructor(
    @inject("ContactRepository")
    protected readonly contactRepository: IContactRepository
  ) {}
  public async execute(
    startPosition: number,
    endPosition: number
  ): Promise<ContactDTO[] | null> {
    return await this.contactRepository.list(startPosition, endPosition);
  }
}
