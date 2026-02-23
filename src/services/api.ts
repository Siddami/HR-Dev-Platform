import axios from "axios";

const api = axios.create({
  baseURL: "https://apitest.hcmatrix.co",
});

interface DashboardResponse {
  total_employees: number;
  new_hire_count: number;
  upcoming_event: number;
  open_positions: number;
}

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (email: string, password: string) =>
  api.post("/api/auth/login", { email, password }).then((res) => res.data);

export const getDashboard = async (): Promise<DashboardResponse> => {
  const res = await api.get<DashboardResponse>("/api/v1/dashboard");
  console.log("getDashboard response:", res.data);
  return res.data;
};

export const getEmployees = (params?: Record<string, unknown>) =>
  api.get("/api/v1/employee", { params }).then((res) => res.data);
