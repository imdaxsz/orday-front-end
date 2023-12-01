import { act, renderHook } from "@testing-library/react";
import {
  SpyInstance,
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import * as ReviewApi from "@/api/ReviewApi";
import useReviewList from "@/hooks/useReivewList";
import { get } from "@/libs/api";
import { BaseError } from "@/libs/error";

vi.mock("@/libs/api", async (importOriginal) => {
  const mod = await importOriginal<typeof import("@/libs/api")>();
  return {
    ...mod,
    get: vi.fn(),
  };
});

let mockStatus: number;
let getWritableReviews: SpyInstance;
let getWrittenReviews: SpyInstance;

beforeEach(() => {
  // 1 또는 2의 값을 가지는 mock status
  mockStatus = Math.round(Math.random()) + 1;
  getWritableReviews = vi.spyOn(ReviewApi, "getWritableReviews");
  getWrittenReviews = vi.spyOn(ReviewApi, "getWrittenReviews");
});

afterEach(() => {
  vi.mocked(get).mockClear();
  getWritableReviews.mockRestore();
  getWrittenReviews.mockRestore();
});

describe("useReviewList", () => {
  it("fetchData가 호출되면 isLoading이 true가 되어야 한다.", () => {
    const { result } = renderHook(() => useReviewList(mockStatus));

    act(() => {
      result.current.fetchData();
    });

    expect(result.current.isLoading).toBe(true);
  });

  it("status가 1이면 작성 가능한 리뷰 목록 조회 요청이 수행되어야 한다.", async () => {
    const { result } = renderHook(() => useReviewList(1));

    await act(async () => {
      await result.current.fetchData();
    });

    expect(getWritableReviews).toHaveBeenCalled();
    expect(getWrittenReviews).not.toHaveBeenCalled();
  });

  it("status가 2이면 작성한 리뷰 목록 조회 요청이 수행되어야 한다.", async () => {
    const { result } = renderHook(() => useReviewList(2));

    await act(async () => {
      await result.current.fetchData();
    });

    expect(getWrittenReviews).toHaveBeenCalled();
    expect(getWritableReviews).not.toHaveBeenCalled();
  });

  it("응답이 성공적으로 오면 isLoading이 false가 되고 리뷰 data가 있어야 한다. ", async () => {
    const mockRes = [
      {
        productId: 1,
        name: "테스트",
        color: "",
        size: "",
        orderId: 1,
        imageUrl: "",
      },
    ];
    vi.mocked(get).mockResolvedValueOnce({ status: 200, data: mockRes });
    const { result } = renderHook(() => useReviewList(0));

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.reviews).toEqual({ status: 200, data: mockRes });
  });

  it("조회 실패 응답이 오면 isLoading이 false가 되고 error를 담은 메시지가 console에 출력되어야 한다.", async () => {
    vi.mocked(get).mockRejectedValueOnce(new BaseError("Error", "Error"));
    const consoleLog = vi.spyOn(console, "log");
    const { result } = renderHook(() => useReviewList(mockStatus));

    await act(async () => {
      await result.current.fetchData();
    });

    expect(consoleLog).toHaveBeenCalledOnce();
  });
});
