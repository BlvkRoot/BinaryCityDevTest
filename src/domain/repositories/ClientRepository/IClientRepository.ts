import { ClientDTO } from "@appication/dtos/ClientDTO";
import { ObjectId } from "mongoose";

export interface IClientRepository {
  save(client: ClientDTO): Promise<void>;
  getLastClientCode(): Promise<ClientDTO | null>;
  generateClientCode(clientName: string): Promise<string>;
  getClientById(clientId: ObjectId): Promise<ClientDTO | null>;
  list(start: number, end: number): Promise<ClientDTO[] | null>;
  findClientByCode(clientCode: string): Promise<ClientDTO | null>;
}