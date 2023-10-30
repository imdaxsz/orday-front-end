import axios from "axios";

import { ApiError, BaseError } from "../error";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 5 * 1000,
  withCredentials: true,
});

// Request interceptor
instance.interceptors.request.use((config) => {
  if (!config.headers) return config;
  // redux store에서 accesstoken 가져오기
  return config;
});

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // response header에 access token이 있다면
    // access token이 (재)발급된 걸로 간주 -> redux store에 저장
    const accessToken = response.headers["Authorization"];
    // refresh token이 있다면 localstorage에 저장
    const refreshToken = response.headers["Authorization-refresh"];
    return response.data;
  },
  (error) => {
    if (error.response?.status === 302) {
      console.log("access token 만료");
    }
    if (error.response?.status === 401) {
      console.log("모든 만료");
      // TODO 로그아웃 처리
      // 토큰 초기화, 로그인 페이지로 리다이렉트
    }
    // TODO: 서버 응답 오류 예외 처리
    if (error.response?.data?.["message"]) {
      return Promise.reject(
        new ApiError(error.response.data, error.response.status),
      );
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
