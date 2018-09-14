import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;