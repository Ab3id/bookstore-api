import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { BooksController } from './book.contoller';
import { BookService } from './book.service';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BookService, PrismaService],
  exports: [BookService],
})
export class BookModule {}
