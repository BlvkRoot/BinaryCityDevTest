import { ListClientService } from "@application/services/ClientService/ListClientService";
import { ListContactService } from "@application/services/ContactService/ListContactService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListContactController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const contactService = container.resolve(ListContactService);
    const startPosition = Number(request.query.start);
    const endPosition = Number(request.query.end);
    const contacts = await contactService.execute(startPosition, endPosition);

    return response.status(200).json({
      success: true,
      contacts,
    });
  }
}
