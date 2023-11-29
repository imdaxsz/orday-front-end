import { act, renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";

import { post } from "@/libs/api";
import { ApiError } from "@/libs/error";

import useLogin from "../hooks/useLogin";

const mockUseNavigate = vi.fn();

vi.mock("@/libs/api", async (importOriginal) => {
  const mod = await importOriginal<typeof import("@/libs/api")>();
  return {
    ...mod,
    post: vi.fn(),
  };
});

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual("react-router-dom");
  return { ...(mod as object), useNavigate: () => mockUseNavigate };
});

global.alert = vi.fn();

describe("./useLogin", () => {
  afterEach(() => {
    vi.mocked(post).mockClear();
    mockUseNavigate.mockClear();
  });

  it("초기값이 바르게 설정되어야 한다.", () => {
    const { result } = renderHook(() => useLogin(), { wrapper: MemoryRouter });
    expect(result.current.email).toBe("");
    expect(result.current.password).toBe("");
    expect(result.current.isLoading).toBe(false);
    expect(result.current.loginError).toEqual({
      email: false,
      password: false,
      result: 0,
    });
  });

  it("로그인을 성공하면 홈으로 이동해야 한다.", async () => {
    vi.mocked(post).mockResolvedValueOnce({ status: 200 });
    const { result } = renderHook(() => useLogin(), { wrapper: MemoryRouter });

    act(() => {
      result.current.handleInputChange(
        {
          target: { value: "test@example.com" },
        } as React.ChangeEvent<HTMLInputElement>,
        "email",
      );
      result.current.handleInputChange(
        {
          target: { value: "testpassword" },
        } as React.ChangeEvent<HTMLInputElement>,
        "password",
      );
    });

    await act(async () => {
      await result.current.onSubmit({
        preventDefault: (e: React.ChangeEvent<HTMLFormElement>) => {
          console.log(e);
        },
      } as React.ChangeEvent<HTMLFormElement>);
    });

    // useNavigate가 한 번 호출된다.
    expect(mockUseNavigate).toBeCalledTimes(1);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.loginError).toEqual({
      email: false,
      password: false,
      result: 0,
    });
  });

  it("로그인을 실패하면 error.result가 0이 아니어야 한다.", async () => {
    vi.mocked(post).mockRejectedValueOnce(new ApiError("Error", "code", 400));
    const { result } = renderHook(() => useLogin(), { wrapper: MemoryRouter });

    act(() => {
      result.current.handleInputChange(
        {
          target: { value: "test@example.com" },
        } as React.ChangeEvent<HTMLInputElement>,
        "email",
      );
      result.current.handleInputChange(
        {
          target: { value: "testpassword" },
        } as React.ChangeEvent<HTMLInputElement>,
        "password",
      );
    });

    await act(async () => {
      await result.current.onSubmit({
        preventDefault: (e: React.ChangeEvent<HTMLFormElement>) => {
          console.log(e);
        },
      } as React.ChangeEvent<HTMLFormElement>);
    });

    expect(result.current.loginError.result).not.toBe(0);
  });
});
