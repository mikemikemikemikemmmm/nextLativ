import axios, { AxiosInstance } from 'axios'
import { baseURL } from '../const'
export const HttpClient = axios.create({
    baseURL
})