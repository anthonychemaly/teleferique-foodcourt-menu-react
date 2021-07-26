import axios from "axios";
import config from "./config";

const instance = axios.create({
  baseURL: config.WS_BASE_URL,
});

instance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  config.headers["x-access-token"] = token ? token : "";
  config.headers.ContentType = "application/json";
  return config;
});

export const login = async (email, password) =>
  await instance.post(`users/login`, { email, password });

export const getAllArticles = async () => await instance.get("menu");
export const getListing = async (id) => await instance.get(`menu/${id}`);
export const editListing = async (id, title_EN, title_AR, price) =>
  await instance.put(`menu/${id}`, { title_EN, title_AR, price });
export const deleteListing = async (id) => await instance.delete(`menu/${id}`);
export const addListing = async (category, title_EN, title_AR, price) =>
  await instance.post(`menu/`, { category, title_EN, title_AR, price });
