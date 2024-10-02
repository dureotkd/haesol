import axios from "axios";

const LOCAL_HOST_NAMES = ["127.0.0.111", "localhost"];

const SERVER_URL =
  process.env.NODE_ENV === "development" || LOCAL_HOST_NAMES.includes(window.location.hostname)
    ? process.env.LOCAL_URL
    : process.env.SERVER_URL;

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
  Accept: "application/json",
  // timeout: 6000,
});

const onRequest = (req) => {
  return req;
};

const onErrorRequest = (err) => {
  return Promise.reject(err);
};

const onResponse = (res) => {
  const { data, status } = res;

  if (data?.msg) {
    alert(data.msg);
  }

  return res;
};

const onErrorResponse = (err) => {
  return Promise.reject(err);
};

axiosInstance.interceptors.request.use(onRequest, onErrorRequest);
axiosInstance.interceptors.response.use(onResponse, onErrorResponse);

export { SERVER_URL };
export default axiosInstance;
