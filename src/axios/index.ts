import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://0001.uz",
});

export { axiosInstance };

