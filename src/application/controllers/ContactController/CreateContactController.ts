import { CreateContactService } from "@appication/services/ContactService/CreateContactService";
import { validationErrorHandler } from "@shared/utils/ValidationErrorHandler";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateContactController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const contactService = container.resolve(CreateContactService);
      validationErrorHandler(request, response);
      await contactService.execute(request.body);

      return response.status(201).json({
        success: true,
        message: "Contact created successfully!",
      });
    } catch ({ message, statusCode }) {
      return response.status(statusCode).json({
        success: false,
        message,
      });
    }
  }
}
