import axios from 'axios';
const dotenv = require('dotenv');

dotenv.config();

const api = axios.create({
	baseURL: process.env.IP_SERVIDOR
});

export default api;