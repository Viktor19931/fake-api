// @flow

import { observable, decorate } from "mobx";

class Store {
  posts = [];
  loading = false;
}

decorate(Store, {
  posts: observable,
  loading: observable
});
export default Store;
