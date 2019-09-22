import { createAction, props } from "@ngrx/store";
import { Post, PostInput } from "./post";

export const loadPosts = createAction("[Posts] Load posts");

export const loadPostsSuccess = createAction(
  "[Posts] Load posts success",
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  "[Posts] Login",
  props<{ username: string; password: string }>()
);

export const loadPost = createAction(
  "[Posts] LoadPost",
  props<{ id: String }>()
);

export const loadPostSuccess = createAction(
  "[Posts] LoadPostSuccess",
  props<{ post: Post }>()
);

export const loadPostFailure = createAction(
  "[Posts] Login",
  props<{ username: string; password: string }>()
);

export const addPost = createAction(
  "[Posts] AddPost",
  props<{ post: PostInput }>()
);

export const addPostSuccess = createAction(
  "[Posts] AddPostSuccess",
  props<{ post: Post }>()
);

export const addPostFailure = createAction(
  "[Posts] AddPostFailure",
  props<{ error: String }>()
);
