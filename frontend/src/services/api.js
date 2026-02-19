import { useAuthStore } from "../store/useAuthStore";

const BASE_URL = import.meta.env.VITE_API_URL;

if (!BASE_URL) {
  console.warn("VITE_API_URL is missing! API requests will fail.");
}

export const fetcher = async (endpoint, options = {}) => {
  const token = useAuthStore.getState().token;

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  if (config.body && typeof config.body === "object") {
    config.body = JSON.stringify(config.body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (response.status === 401 && endpoint !== "/login") {
    window.location.href = "/login";
    const logout = useAuthStore.getState().logout;
    logout();
  }

  const data = await response.json();

  if (!response.ok) {
    throw data; // Lempar error supaya bisa ditangkap di catch(err)
  }

  return data;
};
