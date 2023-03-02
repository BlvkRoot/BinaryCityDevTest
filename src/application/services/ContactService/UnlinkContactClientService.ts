import { IContactRepository } from "@domain/repositories/ContactRepository/IContactRepository";
import { ObjectId } from "mongoose";
import { inject, injectable } from "tsyringe";

@injectable()
export class UnlinkContactClientService {
  constructor(
    @inject("ContactRepository")
    protected readonly contactRepository: IContactRepository
  ) {}
  public async execute(id: string): Promise<void> {
    this.contactRepository.unlinkClientsById(id as unknown as ObjectId);
  }
}
