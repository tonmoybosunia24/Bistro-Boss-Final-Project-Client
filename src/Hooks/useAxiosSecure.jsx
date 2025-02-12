import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
       baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
       const navigate = useNavigate();
       const { Logout } = useAuth()
       // Request Interceptors To Add Authorized Header For Every Secure Call To The Api
       axiosSecure.interceptors.request.use(function (config) {
              const token = localStorage.getItem('Access-Token')
              config.headers.authorization = `Bearer ${token}`
              return config;
       }, function (error) {
              return Promise.reject(error);
       })
       // Add a response interceptor
       axiosSecure.interceptors.response.use(function (response) {
              // Any status code that lie within the range of 2xx cause this function to trigger
              // Do something with response data
              return response;
       }, async function (error) {
              // Any status codes that falls outside the range of 2xx cause this function to trigger
              // Do something with response error
              const status = error.response.status;
              if (status === 401 || status === 403) {
                     await Logout()
                     navigate('/login')
              }
              return Promise.reject(error);
       });
       return axiosSecure;
};

export default useAxiosSecure;