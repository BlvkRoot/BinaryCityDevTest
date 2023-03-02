import { IClientRepository } from "@domain/repositories/ClientRepository/IClientRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class GenerateClientCodeService {
  constructor(
    @inject("ClientRepository")
    protected readonly clientRepository: IClientRepository
  ) {}
  public async execute(clientName: string): Promise<string> {
    return await this.clientRepository.generateClientCode(clientName);
  }
}
