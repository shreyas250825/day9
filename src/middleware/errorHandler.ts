import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err);

  const isProd = process.env.NODE_ENV === 'production';

  res.status(500).json({
    message: err.message || 'Internal Server Error',
    ...(isProd ? {} : { stack: err.stack })
  });
}
