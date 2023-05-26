import React, { createContext } from "react";
import { CreatePost, GetPost, PostComment, GetComments, DeleteComment, CreateCategory, GetPostCategory, GetPostSurveys } from "./post.service";
export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  return (
    <PostContext.Provider value={{ CreatePost, GetPost, PostComment, GetComments, DeleteComment, CreateCategory, GetPostCategory, GetPostSurveys }}>
      {children}
    </PostContext.Provider>
  );
};
