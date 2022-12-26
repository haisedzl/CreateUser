import axios from "axios";

export const instance = axios.create({
  baseURL: "https://637dd13b9c2635df8f8f8fa4.mockapi.io/api/v1/",
});
