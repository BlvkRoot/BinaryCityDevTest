import { UnlinkContactClientService } from "@appication/services/ContactService/UnlinkContactClientService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UnlinkContactClientController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const contactService = container.resolve(UnlinkContactClientService);
    await contactService.execute(request.params.id);
    console.log(request.params.id);
    
    return response.status(200).json({
      success: true,
      message: "Clients unlinked successfully",
    });
  }
}
