import axios from "axios";

export const API_URL =
  import.meta.env.VITE_NODE_ENV === "production"
    ? import.meta.env.VITE_STRAPI_URL
    : "http://localhost:1337/api";

export const IMAGE_API_URL =
  import.meta.env.VITE_NODE_ENV === "production"
    ? import.meta.env.VITE_STRAPI_URL_IMAGE
    : "http://localhost:1337";

const strapi = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default strapi;
