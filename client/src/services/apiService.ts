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
    saveToken(response.data.access_token);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Sign-in failed");
  }
}

// Axios instance with token management
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
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
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Function to handle errors
const handleError = (error: any) => {
  if (error.response) {
    // Server responded with a status other than 200 range
    console.error("Server Error:", error.response.data.message);
    throw new Error(error.response.data.message);
  } else if (error.request) {
    // Request was made but no response received
    console.error("Network Error:", error.message);
    throw new Error("Network error, please try again later.");
  } else {
    // Something happened in setting up the request
    console.error("Error:", error.message);
    throw new Error(error.message);
  }
};

// Get all contacts
export const getAllContacts = async () => {
  try {
    const response = await apiClient.get("/contacts");
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Get a single contact by ID
export const getContact = async (id: string) => {
  try {
    const response = await apiClient.get(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Create a new contact
export const createContact = async (contactData: any) => {
  try {
    const response = await apiClient.post("/contacts", contactData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Update a contact by ID
export const updateContact = async (
  id: string,
  contactData: { name?: string; email?: string; phone?: string }
) => {
  try {
    const response = await apiClient.put(`/contacts/${id}`, contactData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Delete a contact by ID
export const deleteContact = async (id: string) => {
  try {
    const response = await apiClient.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
