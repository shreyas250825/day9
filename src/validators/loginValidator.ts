import { LoginDTO } from '../dto/login.dto';

export const validateLogin = (body: LoginDTO): string[] => {
  const errors: string[] = [];

  if (!body.email || !body.email.includes('@')) {
    errors.push('Invalid or missing email');
  }

  if (!body.password || body.password.length < 4) {
    errors.push('Password must be at least 4 characters long');
  }

  return errors;
};
