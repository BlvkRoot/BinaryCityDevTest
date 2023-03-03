import { CreateContactService } from "@application/services/ContactService/CreateContactService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateContactController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const contactService = container.resolve(CreateContactService);
      await contactService.execute(request.body);

      return response.status(201).json({
        success: true,
        message: "Contact created successfully!",
      });
    } catch ({ message, statusCode }) {
      return response.status(statusCode as number).json({
        success: false,
        message,
      });
    }
  }
}
