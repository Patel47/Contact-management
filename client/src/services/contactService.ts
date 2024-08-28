import axios from 'axios';

const API_URL = '/api/contacts';

// Set up an axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept requests to include the authorization token if needed
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Function to handle errors
const handleError = (error: any) => {
  if (error.response) {
    // Server responded with a status other than 200 range
    console.error('Server Error:', error.response.data.message);
    throw new Error(error.response.data.message);
  } else if (error.request) {
    // Request was made but no response received
    console.error('Network Error:', error.message);
    throw new Error('Network error, please try again later.');
  } else {
    // Something happened in setting up the request
    console.error('Error:', error.message);
    throw new Error(error.message);
  }
};

// Get all contacts
export const getAllContacts = async () => {
  try {
    const response = await apiClient.get('/');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Get a single contact by ID
export const getContact = async (id: string) => {
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Create a new contact
export const createContact = async (contactData: { name: string; email: string; phone: string }) => {
  try {
    const response = await apiClient.post('/', contactData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Update a contact by ID
export const updateContact = async (id: string, contactData: { name?: string; email?: string; phone?: string }) => {
  try {
    const response = await apiClient.put(`/${id}`, contactData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Delete a contact by ID
export const deleteContact = async (id: string) => {
  try {
    const response = await apiClient.delete(`/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
