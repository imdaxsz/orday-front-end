import axios from "axios";

import { ApiError, BaseError } from "../error";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT,
  timeout: 5 * 1000,
  withCredentials: true,
});

// Request interceptor
instance.interceptors.request.use((config) => {
  if (!config.headers) return config;
  // access token 가져오기
  const accessToken = localStorage.getItem("token");
  if (accessToken && config.headers) {
    config.headers["authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // response header에 access token이 있다면
    // access token이 (재)발급된 걸로 간주 -> localStorage에 저장
    const accessToken = response.headers["authorization"];
    if (accessToken) localStorage.setItem("token", accessToken);
    // 토큰이 요청 중에 재발급된 경우 기존 요청 재요청
    if (response.status === 201 && accessToken) {
      response.config.headers["authorization"] = accessToken;
      return instance(response.config);
    }
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log(error, "unauthorized");
      // access token 제거
      localStorage.removeItem("token");
      alert("로그인 해주세요!");
      window.location.href = "/login";
    }

    if (error.response?.data) {
      const { message, code, status } = error.response.data;
      return Promise.reject(new ApiError(message, code, status));
    }

    if (error.message.startsWith("timeout")) {
      return Promise.reject(new BaseError("Timeout Error", "Network timeout"));
    }

    return Promise.reject(new BaseError("Unknown Error", error.message));
  },
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}

export default {
  get,
  post,
  put,
  patch,
  delete: del,
};
