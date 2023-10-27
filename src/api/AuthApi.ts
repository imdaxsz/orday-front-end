import { del, get, post, put } from "@/libs/api";

/**@description 회원 가입 요청 */
export const join = async (form: UserInfoForm) => {
  return await post("/user/signup", form);
};

/**@description 로그인 요청 */
export const login = async (email: string, password: string) => {
  return await post("/login", { email, password });
};

/**@description 회원정보 조회 요청 */
export const getUserInfo = async () => {
  return await get("/user/get/info");
};

/**@description 회원정보 수정 요청 */
export const updateUserInfo = async (form: Partial<UserInfoForm>) => {
  return await put("/user/update/info", form);
};

/**@description 회원 탈퇴 요청 */
export const leave = async () => {
  return await del("/user/unregister");
};
