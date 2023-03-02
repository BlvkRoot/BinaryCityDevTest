import { ContactDTO } from "@application/dtos/ContactDTO";
import { IContactRepository } from "@domain/repositories/ContactRepository/IContactRepository";
import { ObjectId } from "mongoose";
import { inject, injectable } from "tsyringe";

@injectable()
export class ShowContactService {
  constructor(
    @inject("ContactRepository")
    protected readonly contactRepository: IContactRepository
  ) {}
  public async execute(id: string): Promise<ContactDTO | null> {
    return await this.contactRepository.getContactById(
      id as unknown as ObjectId
    );
  }
}
