import { API_URL, getData, request } from "./base";

export const getPostsRequest = () => getData(`${API_URL}/posts`);

export const addPostRequest = (data: Object) => {
//   console.log(data);
  return fetch(`${API_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => json);
};
