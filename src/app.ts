import express from 'express';
import { json } from 'body-parser';
import { authRoutes } from './routes/auth';
import { verifyToken } from './middleware/verifyToken';

const app = express();
app.use(json());

// Routes
app.use('/auth', authRoutes);

// Protected test route
app.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: `Welcome, ${req.user?.email}` });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
