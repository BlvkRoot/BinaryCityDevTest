import { ClientDTO } from "@appication/dtos/ClientDTO";
import { IClientRepository } from "@domain/repositories/ClientRepository/IClientRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListClientService {
  constructor(
    @inject("ClientRepository")
    protected readonly clientRepository: IClientRepository
  ) {}
  public async execute(
    startPosition: number,
    endPosition: number
  ): Promise<ClientDTO[] | null> {
    return await this.clientRepository.list(startPosition, endPosition);
  }
}
