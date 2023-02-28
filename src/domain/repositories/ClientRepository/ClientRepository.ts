import { ClientDTO } from "@appication/dtos/ClientDTO";
import { ClientModel } from "@domain/models/Client";
import { IClientRepository } from "./IClientRepository";

export class ClientRepository implements IClientRepository {
  public async save(clientData: ClientDTO): Promise<void> {
    const lastInsertedDocument = await this.getLastClientCode();
    const clientCode = this.generateClientCode(
      lastInsertedDocument,
      clientData.name
    );
    clientData.clientCode = clientCode;
    const client = new ClientModel(clientData);
    await client.save();
  }

  public getLastClientCode(): Promise<ClientDTO | null> {
    return ClientModel.findOne().sort({ field: "asc", _id: -1 });
  }

  private generateClientCode(
    lastInsertedDocument: ClientDTO | null,
    clientName: string
  ): string {
    if (!lastInsertedDocument) return `${clientName}00${1}`;
    const lastClientCode = parseInt(
      lastInsertedDocument?.clientCode.slice(-3)
    ).toString();
    // add 2 zeros to the left if length is 1
    if (lastClientCode.length === 1) {
      const newClientCode = (parseInt(lastClientCode.slice(-1)) + 1).toString();
      return newClientCode.length > 1
        ? `${clientName}0${newClientCode}`
        : `${clientName}00${newClientCode}`;
    }
    // add 1 zeros to the left if length is 2
    if (lastClientCode.length === 2) {
      const newClientCode = (parseInt(lastClientCode.slice(-2)) + 1).toString();
      return newClientCode.length > 2
        ? `${clientName}${newClientCode}`
        : `${clientName}0${newClientCode}`;
    }
    // don't add zeros to the left if length is 3
    return (parseInt(lastClientCode) + 1).toString();
  }
}
