import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-practice-18868.firebaseio.com/'
});

export default instance;
