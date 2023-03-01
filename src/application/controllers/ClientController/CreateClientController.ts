import { CreateClientService } from "@appication/services/ClientService/CreateClientService";
import { validationErrorHandler } from "@shared/utils/ValidationErrorHandler";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateClientController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const clientService = container.resolve(CreateClientService);
    validationErrorHandler(request, response);
    await clientService.execute(request.body);

    return response.status(201).json({
      success: true,
      message: 'Client created successfully!'
    })
  }
}