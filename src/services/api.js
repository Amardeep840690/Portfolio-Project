// Get API URL from environment variable (automatically loaded from .env file)
// Vite requires VITE_ prefix for environment variables exposed to frontend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Log API URL in development for debugging (only in dev mode)
if (import.meta.env.DEV) {
  console.log('API Base URL:', API_BASE_URL);
}

/**
 * Generic fetch wrapper to handle JSON parsing and error checking
 */
async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  console.log('Fetching:', `${API_BASE_URL}${endpoint}`);

  try {
    const response = await window.fetch(`${API_BASE_URL}${endpoint}`, config);
    
    // Check if response is JSON before parsing
    const contentType = response.headers.get('content-type');
    let data;
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // If not JSON, get text response
      const text = await response.text();
      data = text ? { message: text } : { message: response.statusText };
    }
    
    if (response.ok) {
      return data;
    }
    
    // Handle error responses
    const errorMessage = data.error || data.message || response.statusText || 'Request failed';
    throw new Error(errorMessage);
  } catch (err) {
    // Handle network errors or parsing errors
    if (err instanceof TypeError && err.message.includes('fetch')) {
      throw new Error('Network error: Unable to connect to server. Please check your connection.');
    }
    throw err;
  }
}

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' });
};

client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, body });
};

export default client;
