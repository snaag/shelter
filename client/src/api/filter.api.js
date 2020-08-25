import { request } from "./apiUtils";

const route = "shelter";

export const getShelters = params => request.get(`${route}?${params}`);
