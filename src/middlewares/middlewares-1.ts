import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  console.log('\n middlewares-1', req.method, req.path, `\n`);
  next();
};
