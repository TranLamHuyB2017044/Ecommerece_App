import axios from "axios";
import Cookies from "js-cookie";
const headers = { Accept: "application/json" };

// const BaseURL = "http://localhost:5000/api/";
const BaseURL = "https://tranlamhuy-be-ecommerce.onrender.com/api/";
// console.log(token)

export const publicRequest = () => {
  const instance = axios.create({
    baseURL: BaseURL,
    headers: headers,
  });
  instance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("access_token");
      console.log("AccessToken:", accessToken);

      if (accessToken && !config.headers["token"]) {
        config.headers["token"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const { response, config } = error;
      const status = response?.status;
      if (
        status === 403 &&
        Cookies.get("refreshToken") &&
        response.data === "Token is invalid"
      ) {
        const refreshTokenLocal = Cookies.get("refreshToken");

        try {
          const { newAccessToken, refreshToken } = (
            await instance.post(`auth/refreshToken/`, {
              refreshToken: refreshTokenLocal,
            })
          ).data;

          window.localStorage.setItem("access_token", newAccessToken);

          Cookies.set("refreshToken", refreshToken, { expires: 365 });
          console.log("RefreshToken:", refreshToken);
          console.log("newAccessToken:", newAccessToken);
          config.headers["token"] = `Bearer ${newAccessToken}`;

          return Promise.resolve(instance.request(config));
        } catch (error) {
          return Promise.reject(error);
        }
      }
      // Handle errors
      return Promise.reject(error);
    }
  );

  return instance;
};
