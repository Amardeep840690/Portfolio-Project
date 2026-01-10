// const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// /**
//  * Generic fetch wrapper to handle JSON parsing and error checking
//  */
// async function client(endpoint, { body, ...customConfig } = {}) {
//   const headers = { 'Content-Type': 'application/json' };

//   const config = {
//     method: body ? 'POST' : 'GET',
//     ...customConfig,
//     headers: {
//       ...headers,
//       ...customConfig.headers,
//     },
//   };

//   if (body) {
//     config.body = JSON.stringify(body);
//   }

//   let data;
//   try {
//     const response = await window.fetch(`${API_BASE_URL}${endpoint}`, config);
//     data = await response.json();
    
//     if (response.ok) {
//       return data;
//     }
    
//     throw new Error(response.statusText);
//   } catch (err) {
//     return Promise.reject(err.message ? err.message : data);
//   }
// }

// client.get = function (endpoint, customConfig = {}) {
//   return client(endpoint, { ...customConfig, method: 'GET' });
// };

// client.post = function (endpoint, body, customConfig = {}) {
//   return client(endpoint, { ...customConfig, body });
// };

// export default client;
