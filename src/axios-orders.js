import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-a77ed.firebaseio.com',
});

export default instance;