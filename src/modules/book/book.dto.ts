import { IsString, IsNotEmpty } from 'class-validator';

export class BookDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  published_at: Date;

  @IsString()
  @IsNotEmpty()
  count: number;

  @IsString()
  @IsNotEmpty()
  password: string;
}
