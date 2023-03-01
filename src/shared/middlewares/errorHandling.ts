import { Request, Response, NextFunction } from 'express';
import ErrorsApp from '@shared/errors/ErrorsApp';

const errorHandling = async (
  err: Error | any,
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response> => {
  
  if (err instanceof ErrorsApp) {
    return response
      .status(err.statusCode)
      .json({ success: false, message: err.message });
  }

  return response.status(500).json({
    success: false,
    message: 'Internal server error.',
  });
};

export { errorHandling };
