import { UnlinkContactClientService } from "@application/services/ContactService/UnlinkContactClientService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UnlinkContactClientController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const contactService = container.resolve(UnlinkContactClientService);
    
    await contactService.execute(request.params.id, request.params.clientId);
    
    return response.status(200).json({
      success: true,
      message: "Client unlinked successfully",
    });
  }
}
