import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

// react-testing-library의 matcher 확장
// `@testing-library/jest-dom`의 matcher를 사용할 수 있게 된다.
// https://github.com/testing-library/jest-dom#with-vitest
expect.extend(matchers);
