import { GenerateClientCodeService } from "@application/services/ClientService/GenerateClientCodeService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class GenerateClientCodeController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const clientService = container.resolve(GenerateClientCodeService);
    const clientCode = await clientService.execute(request.params.clientName);

    return response.status(200).json({
      success: true,
      clientCode,
    });
  }
}
