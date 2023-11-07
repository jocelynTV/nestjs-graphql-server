import { IsString } from 'class-validator';

export class CreatePostInput {
  @IsString()
  title: string;

  @IsString()
  body: string;
}
