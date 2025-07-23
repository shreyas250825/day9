// src/dto/BookDTO.ts
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class BookDTO {
  @Expose()
  title!: string;

  @Expose()
  author!: string;

  @Expose()
  publishedYear!: number;

  @Expose()
  isbn!: string;

  internalNotes?: string;
}
