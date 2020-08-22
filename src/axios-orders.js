import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-custom-burger.firebaseio.com/'
});

export default instance;