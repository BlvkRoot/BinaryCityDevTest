import { ClientDTO } from "@appication/dtos/ClientDTO";

export interface IClientRepository {
  save(client: ClientDTO): Promise<void>;
  getLastClientCode(): Promise<ClientDTO | null>;
  generateClientCode(clientName: string): Promise<string>;
}