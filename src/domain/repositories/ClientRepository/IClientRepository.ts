import { ClientDTO } from "@appication/dtos/ClientDTO";
import { Model } from "mongoose";

export interface IClientRepository {
  save(client: ClientDTO): Promise<void>;
  // getLastClientCode(): Promise<Model<ClientDTO>>;
}