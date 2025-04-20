import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Axios instance
const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
     'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// Automatically attach JWT to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Login
export const login = async (email, password) => {
  console.log("Sending login request to backend...");
  try {
    const response = await api.post("/login", { email, password });
    console.log("Login response:", response.data);
    const { token, user } = response.data;
    localStorage.setItem("jwt", token);
    return user;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Logout
export const logout = () => {
  localStorage.removeItem("jwt");
};

// ✅ Get current user from token
export const getCurrentUser = async () => {
  try {
    const response = await api.get("/current_user");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch current user:", error.response?.data || error.message);
    return null;
  }
};

// ✅ Signup
export const signup = async (userData) => {
  const response = await api.post("/signup", userData);
  return response.data;
};

// ✅ Fetch users
export const fetchUsers = async (currentUserId) => {
  const response = await api.get("/users", {
    params: { current_user_id: currentUserId },
  });
  return response.data;
};

// ✅ Rate a user
export const rateUser = async (ratedUserId, rating) => {
  const response = await api.post("/rate", { ratedUserId, rating });
  return response.data;
};

export default api;
