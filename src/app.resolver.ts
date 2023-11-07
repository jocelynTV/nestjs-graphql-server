// src/app.resolver.ts

import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { AppService } from './app.service';
import { CreatePostInput } from './dto/create-post.input';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Post')
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query('posts')
  getPosts() {
    return this.appService.getPosts();
  }

  @Query('post')
  getPost(@Args('id', ParseIntPipe) id: number) {
    return this.appService.getPost(id);
  }

  @Mutation('createPost')
  createPost(@Args('createPostInput') args: CreatePostInput) {
    return this.appService.createPost(args);
  }

  @Mutation('updatePost')
  updatePost(
    @Args('id', ParseIntPipe) id: number,
    @Args('createPostInput') args: CreatePostInput,
  ) {
    return this.appService.updatePost(id, args);
  }

  @Mutation('deletePost')
  deletePost(@Args('id', ParseIntPipe) id: number) {
    return this.appService.deletePost(id);
  }
}
