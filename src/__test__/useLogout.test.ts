import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import useLogout from "@/hooks/useLogout";
import { get } from "@/libs/api";
import { BaseError } from "@/libs/error";

const mockUseNavigate = vi.fn();

vi.mock("@/libs/api", async (importOriginal) => {
  const mod = await importOriginal<typeof import("@/libs/api")>();
  return {
    ...mod,
    get: vi.fn(),
  };
});

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual("react-router-dom");
  return { ...(mod as object), useNavigate: () => mockUseNavigate };
});

global.alert = vi.fn();

afterEach(() => {
  vi.mocked(get).mockClear();
  mockUseNavigate.mockClear();
});

describe("useLogout", () => {
  it("로그아웃 요청에 성공하면 localStorage에서 access token을 삭제해야 한다.", async () => {
    const removeToken = vi.spyOn(localStorage, "removeItem");
    vi.mocked(get).mockResolvedValueOnce({ status: 200 });
    const { result } = renderHook(() => useLogout());

    await act(async () => {
      await result.current.logout();
    });

    expect(removeToken).toHaveBeenCalledOnce();
    removeToken.mockClear();
  });

  it("logout 함수가 실행되면 홈으로 리다이렉트 되어야 한다.", async () => {
    const { result } = renderHook(() => useLogout());

    await act(async () => {
      await result.current.logout();
    });

    expect(mockUseNavigate).toHaveBeenCalledOnce();
  });

  it("로그아웃에 실패하면 error를 담은 메시지를 console에 출력해야 한다.", async () => {
    vi.mocked(get).mockRejectedValueOnce(new BaseError("Error", "Error"));
    const consoleLog = vi.spyOn(console, "log");
    const { result } = renderHook(() => useLogout());

    await act(async () => {
      await result.current.logout();
    });

    expect(consoleLog).toHaveBeenCalledOnce();
    consoleLog.mockClear();
  });
});
