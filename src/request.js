import axios from "axios";


const BaseURL = "http://localhost:5000/api/";
const token = localStorage.getItem('access_token');
// console.log(token)
export const publicRequest = axios.create({
  baseURL: BaseURL,
  
});
export const usercRequest = axios.create({
  
  baseURL: BaseURL,
    headers: {token: `Bearer ${token}`}
});
