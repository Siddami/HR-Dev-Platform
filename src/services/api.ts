import axios from "axios";

const api = axios.create({
  baseURL: "https://apitest.hcmatrix.co",
});

// Add token to headers if exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (!config.headers) {
    config.headers = {};
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (email: string, password: string) =>
  api.post("/api/auth/login", { email, password }).then((res) => res.data);

export const getDashboard = () =>
  api.get("/api/v1/dashboard").then((res) => res.data);

export const getEmployees = (params?: Record<string, unknown>) =>
  api.get("/api/v1/employee", { params }).then((res) => res.data);
