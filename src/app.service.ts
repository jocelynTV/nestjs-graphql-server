import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class AppService {
  private readonly post: Post[] = [];

  private id = 1;

  getHello(): string {
    return 'Hello World!';
  }

  getPosts(): Post[] {
    return this.post;
  }

  getPost(id: number): Post {
    return this.post.find((item: Post) => item.id === id);
  }

  createPost(createPostInput: CreatePostInput): Post {
    const data = { ...createPostInput, id: this.id++ };
    this.post.push(data);
    return data;
  }

  updatePost(id: number, createPostInput: CreatePostInput) {
    return this.updateObjectById(this.post, id, createPostInput);
  }

  deletePost(id: number) {
    return this.deleteObjectById(this.post, id);
  }

  private updateObjectById(arr, id, newData) {
    const objIndex = arr.findIndex((item) => item.id === id);
    if (objIndex !== -1) {
      arr[objIndex] = { ...arr[objIndex], ...newData };
      return { updated: true };
    }
    return { updated: false };
  }

  private deleteObjectById(arr, id) {
    const filteredArr = arr.filter((item) => item.id !== id);
    if (filteredArr.length < arr.length) {
      arr.length = 0;
      arr.push(...filteredArr);
      return { updated: true };
    }
    return { updated: false };
  }
}
