import { UnlinkClientContactService } from "@application/services/ClientService/UnlinkClientContactService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UnlinkClientContactController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const clientService = container.resolve(UnlinkClientContactService);
    
    await clientService.execute(request.params.id, request.params.contactId);
    
    return response.status(200).json({
      success: true,
      message: "Contact unlinked successfully",
    });
  }
}
