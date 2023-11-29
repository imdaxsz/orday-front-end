import { describe, expect, it } from "vitest";

import { getElapsedTime } from "../utils";

describe("getElapsedTime", () => {
  const mockDate = new Date().getTime();
  const mock1 = mockDate - 1000 * 40;
  const mock2 = mockDate - 1000 * 2000;
  const mock3 = mockDate - 1000 * 40000;
  const mock4 = mockDate - 1000 * 120000;
  const mock5 = mockDate - 1000 * 180000;

  it("경과 시간이 1분 미만이면 '방금 전'이라는 문자열을 리턴한다.", () => {
    expect(getElapsedTime(new Date(mock1).toString())).toBe("방금 전");
  });

  it("경과 시간이 1시간 미만이면 'n분 전'이라는 문자열을 리턴한다.", () => {
    expect(getElapsedTime(new Date(mock2).toString())).toMatch(/^\d+분 전/);
  });

  it("경과 시간이 24시간 미만이면 'n시간 전'이라는 문자열을 리턴한다.", () => {
    expect(getElapsedTime(new Date(mock3).toString())).toMatch(/^\d+시간 전/);
  });

  it("경과 시간이 24시간 이상 48시간 미만이면 '어제'라는 문자열을 리턴한다.", () => {
    expect(getElapsedTime(new Date(mock4).toString())).toBe("어제");
  });

  it("경과 시간이 48시간 이상이면 입력 받은 Date 문자열을 그대로 리턴한다.", () => {
    expect(getElapsedTime(new Date(mock5).toString())).toBe(
      new Date(mock5).toString().split("T")[0],
    );
  });
});
