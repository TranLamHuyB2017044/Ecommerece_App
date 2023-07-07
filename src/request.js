import axios from "axios";

const BaseURL = "http://localhost:5000/api/";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTNkNGQyNzM5YmU4YzdhYTY1Mzg5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODcxNDg5MiwiZXhwIjoxNjg4OTc0MDkyfQ.E0-56o8iGGWtNAqtUoYzie37hki63CClUMJ2_8B21rs'


export const publicRequest = axios.create({
  baseURL: BaseURL,
  
});
export const usercRequest = axios.create({
  baseURL: BaseURL,
    headers: {token: `Bearer ${token}`}
});
