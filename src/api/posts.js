import { API_URL, getData, request } from "./base";

export const getPostsRequest = () => getData(`${API_URL}/db`);

export const addPostRequest = (data: Object) =>
  request(`${API_URL}/fake-api/posts`, "post", data);
