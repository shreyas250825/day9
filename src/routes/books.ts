import express from 'express';
import { plainToInstance } from 'class-transformer';
import { BookDTO } from '../dto/BookDTO';
import { verifyToken } from '../middleware/verifyToken';
import { IsUser, IsAdmin } from '../middleware/roleMiddleware';

const router = express.Router();

router.post('/books', verifyToken, (req, res) => {
  const dto = plainToInstance(BookDTO, req.body);
  console.log(dto);
  res.status(201).json({ message: 'Book received' });
});

router.get('/books/:id', verifyToken, (req, res) => {
  const mockBook = {
    title: '1984',
    author: 'George Orwell',
    publishedYear: 1949,
    isbn: '9780451524935',
    internalNotes: 'Confidential'
  };

  const dto = plainToInstance(BookDTO, mockBook);
  res.json(dto);
});

export default router;
