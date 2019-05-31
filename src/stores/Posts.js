// @flow

import { observable, decorate, action } from "mobx";
import * as posts from "../api/posts";

class Store {
  posts = [];
  loading = false;

  getPosts = () => {
    this.loading = true;
    posts
      .getPostsRequest()
      .then(({ data }) => {
        console.log(data);
        this.posts = data.posts;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.posts = this.loading = false;
      });
  };

  addPost = () => {
    const data = {
      id: 4,
      title: "sdgfdg",
      content: "fdsgfdg",
      url: "ffddfgrgsdfg"
    };
    posts
      .addPostRequest(data)
      .then(resp => console.log(resp))
      .catch(err => console.log("error",err.response));
  };
}

decorate(Store, {
  posts: observable,
  loading: observable,
  getPosts: action
});

export default Store;
