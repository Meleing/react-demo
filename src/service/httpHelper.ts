import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    // headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;
