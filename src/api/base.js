// @flow

import axios from "axios";

export const API_URL = "https://my-json-server.typicode.com/Viktor19931/fake-api"

export const request = async (
  url: string,
  method: string = "get",
  data: Object
): Promise<any> => {

  return axios({
    url,
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    data: JSON.stringify(data)
  });
};

export const getData = (url: string) => request(url);
