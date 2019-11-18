import axios from 'axios';

const instance = axios.create({
    baseURL : "https://react-burger-app-874e8.firebaseio.com/"
});

export default instance;