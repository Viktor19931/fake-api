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
        this.posts = data;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.posts = this.loading = false;
      });
  };

  addPost = (data: Object) => {
    const result = {
      ...data,
      url:
        "https://images.pexels.com/photos/237018/pexels-photo-237018.jpeg?cs=srgb&dl=asphalt-beauty-colorful-237018.jpg&fm=jpg"
    };
    posts
      .addPostRequest(result)
      .then(post => this.posts.unshift(post))
      .catch(err => console.log("error", err.response));
  };
}

decorate(Store, {
  posts: observable,
  loading: observable,
  getPosts: action
});

export default Store;
