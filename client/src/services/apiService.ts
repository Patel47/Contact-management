import axios from "axios";

// Base URL for your API (adjust as needed)
const API_BASE_URL = "http://localhost:5001/api";

// Function to save the token in local storage
export function saveToken(token: string) {
  localStorage.setItem("authToken", token);
}

// Function to get the token from local storage
export function getToken() {
  return localStorage.getItem("authToken");
}

// Function to remove the token from local storage
export function removeToken() {
  localStorage.removeItem("authToken");
}

// Function to sign up a new user
export async function signUp(userData: any) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/register`,
      userData
    );
    saveToken(response.data.token);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Sign-up failed");
  }
}

// Function to sign in a user
export async function signIn(credentials: any) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/login`,
      credentials
    );
    saveToken(response.data.token); // Save token if sign-in is successful
    return response.data; // Return the response data from the server
  } catch (error: any) {
    console.error("Sign-in error:", error);
    throw new Error(error.response?.data?.message || "Sign-in failed");
  }
}

// Axios instance with token management
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor to attach token to headers
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token expiration or other errors
apiClient.interceptors.response.use(
  (response: any) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., token expiration)
      removeToken();
      // Redirect to login page or show error message
      //   window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
