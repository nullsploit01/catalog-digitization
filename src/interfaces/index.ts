import { NextFunction, Request, Response } from 'express'

export interface IControllerMethod {
  (req: Request, res: Response, next: NextFunction): Promise<void | Response>
}
