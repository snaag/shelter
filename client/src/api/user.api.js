import { request } from "./apiUtils";

const route = "user";

export const postUser = (url, info = {}) =>
  request.post(`${route}/${url}`, info);
