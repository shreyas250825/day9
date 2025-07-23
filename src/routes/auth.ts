import express from 'express';
import { LoginDTO } from '../dto/login.dto';
import { validateLogin } from '../validators/loginValidator';
import jwt from 'jsonwebtoken';

export const authRoutes = express.Router();

authRoutes.post('/login', (req, res) => {
  const body: LoginDTO = req.body;

  const errors = validateLogin(body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // Dummy auth check (replace with real DB logic)
  if (body.email === 'admin@example.com' && body.password === 'password') {
    const token = jwt.sign({ email: body.email }, 'secretKey', { expiresIn: '1h' });
    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});
