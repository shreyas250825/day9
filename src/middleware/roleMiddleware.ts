import { Request, Response, NextFunction } from 'express';

export function IsUser(req: any, res: Response, next: NextFunction) {
  if (req.user?.user_type_id === 0) return next();
  res.status(403).json({ message: 'Only users allowed' });
}

export function IsAdmin(req: any, res: Response, next: NextFunction) {
  if (req.user?.user_type_id === 1) return next();
  res.status(403).json({ message: 'Only admins allowed' });
}
