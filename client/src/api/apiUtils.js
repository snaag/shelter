import axios from "axios";

const URL = "http://ec2-3-129-24-234.us-east-2.compute.amazonaws.com:4000";

export const request = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
