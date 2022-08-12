import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Book } from '@prisma/client';
import { LoginUserDTO } from '../auth/auth.dto';
import { BookDTO } from './book.dto';

import { BookService } from './book.service';

@ApiTags('books')
@Controller('/books')
export class BooksController {
  constructor(private bookService: BookService) {}

  @Get('/')
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll({});
  }

  @Get('books/:id')
  async getBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.findOne({ id: Number(id) });
  }

  @Delete('books/:id')
  async deleteBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.delete({ id: Number(id) });
  }

  @Post('book')
  @ApiOperation({ description: 'Add new book' })
  @ApiBody({ type: BookDTO })
  async createDraft(
    @Body()
    postData: {
      title: string;
      author: string;
      publishedAt: string;
      count: number;
    },
  ): Promise<Book> {
    const { title, author, publishedAt, count } = postData;
    return this.bookService.create({
      title,
      author,
      published_at: new Date(publishedAt),
      count,
    });
  }
}
