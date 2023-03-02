import { ShowContactService } from "@application/services/ContactService/ShowContactService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ShowContactController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const contactService = container.resolve(ShowContactService);
    const contact = await contactService.execute(request.params.id);

    return response.status(200).json({
      success: true,
      contact,
    });
  }
}
