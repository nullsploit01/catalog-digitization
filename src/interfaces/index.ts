import { NextFunction, Request, Response } from 'express'

export interface IControllerMethod {
  (req: Request, res: Response, next: NextFunction): Promise<void | Response>
}

export interface IErrorHandlerMiddleware {
  (err: Error, req: Request, res: Response, next: NextFunction): Response
}

export interface IRateLimiterMiddleware {
  (req: Request, res: Response, next: NextFunction): void
}

export interface IErrorResponse {
  code: string
  error: string | Record<string, string>[]
}
