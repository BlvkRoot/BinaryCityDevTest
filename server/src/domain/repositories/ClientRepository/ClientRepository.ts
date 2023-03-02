import { ClientDTO } from "@application/dtos/ClientDTO";
import { ClientModel } from "@domain/models/Client";
import { ObjectId } from "mongoose";
import { IClientRepository } from "./IClientRepository";

export class ClientRepository implements IClientRepository {
  public async save(clientData: ClientDTO): Promise<void> {
    const client = new ClientModel(clientData);
    await client.save();
  }

  public getLastClientCode(): Promise<ClientDTO | null> {
    return ClientModel.findOne().sort({ field: "asc", _id: -1 });
  }

  public async generateClientCode(clientName: string): Promise<string> {
    const lastInsertedDocument = await this.getLastClientCode();
    // Set the client name to the new generated client name in UPPERCASE format
    clientName = this.generateAlphaCharacters(clientName).toUpperCase();

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
    return `${clientName}${parseInt(lastClientCode) + 1}`;
  }

  private generateAlphaCharacters(clientName: string): string {
    const clientNameSplitted = clientName.split(" ");
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // generate random character index
    const randomCharacterIndex = Math.floor(Math.random() * alphabets.length);

    // Case when name is 3+ words separated
    if (clientNameSplitted.length >= 3) {
      const [firstName, middleName, LastName] = clientNameSplitted;
      return `${firstName[0]}${middleName[0]}${LastName[0]}`;
    }

    // Case when name is 2 words separated
    if (clientNameSplitted.length == 2) {
      const [firstName, middleName] = clientNameSplitted;
      return `${firstName[0]}${middleName[0]}${alphabets[randomCharacterIndex]}`;
    }

    // Case when name is 1 word
    if (clientNameSplitted.length === 1 && clientName.length > 3) {
      return `${clientNameSplitted[0].slice(0, 3)}`;
    }

    // Case when name is less than 3 alpha characters
    if (clientName.length < 3) {
      return `${clientName}${alphabets[randomCharacterIndex]}`;
    }

    // Case when name already contains only 3 characters
    return clientName;
  }

  public getClientById(clientId: ObjectId): Promise<ClientDTO | null> {
    return ClientModel.findOne({ _id: clientId });
  }

  public list(start: number, end: number): Promise<ClientDTO[] | null> {
    return ClientModel.find({}).skip(start).limit(end).sort({ name: "asc" });
  }

  public findClientByCode(clientCode: string): Promise<ClientDTO | null> {
    return ClientModel.findOne({ clientCode });
  }

  public async unlinkContactsById(
    clientId: ObjectId,
    newLinkedContacts: ObjectId[]
  ): Promise<void> {
    console.log(clientId, newLinkedContacts);
    await ClientModel.updateOne(
      { _id: clientId },
      {
        $set: {
          contacts: newLinkedContacts,
        },
      }
    );
  }
}
