import axios from "axios";


const BaseURL = "http://localhost:5000/api/";
// const token = JSON.parse(localStorage.getItem('persist:root'))
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWM2NTQ1OGY2OWFjNmQyYjJjMmVmOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MzI5NDE5OCwiZXhwIjoxNjkzNTUzMzk4fQ.eCULlbi8NYlhIBXNT64H_DRg3GVLon7nJCAhxv7KalI'
// const token = JSON.parse(localItem.user)?.currentUser?.data.accessToken

export const publicRequest = axios.create({
  baseURL: BaseURL,
  
});
export const usercRequest = axios.create({
  
  baseURL: BaseURL,
    headers: {token: `Bearer ${token}`}
});
