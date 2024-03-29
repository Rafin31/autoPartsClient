import axios from 'axios';

const authenticatedApiClient = axios.create(
    {
        // baseURL: "http://localhost:5000"
        // baseURL: "https://asif.protugaltour.com/"
        baseURL: "https://asif.tourparisiya.com/"
    }
)

authenticatedApiClient.interceptors.request.use(function (config) {

    const token = `Bearer ${localStorage.getItem('accessToken')}`
    config.headers.authorization = token
    return config;

}, function (error) {
    return Promise.reject(error);
});



export {
    authenticatedApiClient
}