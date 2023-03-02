import { ListClientService } from "@application/services/ClientService/ListClientService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListClientController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const clientService = container.resolve(ListClientService);
    const startPosition = Number(request.query.start);
    const endPosition = Number(request.query.end);
    const clients = await clientService.execute(startPosition, endPosition);

    return response.status(200).json({
      success: true,
      clients,
    });
  }
}
