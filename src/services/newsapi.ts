import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d57fc37dff6042779ca7c8462edd9f9e'
});

export default api;