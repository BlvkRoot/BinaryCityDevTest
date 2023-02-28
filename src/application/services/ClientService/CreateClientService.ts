import { ClientDTO } from "@appication/dtos/ClientDTO";
import { IClientRepository } from "@domain/repositories/ClientRepository/IClientRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateClientService {
  constructor(
    @inject("ClientRepository")
    protected readonly clientRepository: IClientRepository
  ) {}
  public async execute(clientData: ClientDTO): Promise<void> {
    await this.clientRepository.save(clientData);
  }
}
