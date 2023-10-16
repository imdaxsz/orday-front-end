import { ReactNode } from "react";

/**
 * props에 children을 반드시 포함하도록 강제하는 역할을 합니다.
 *
 * @example StrictPropsWithChildren<ButtonProps>
 * */
export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode | JSX.Element;
};

export interface ProductInfo {
  id: number;
  image: string;
  url: string;
  brand: { name: string; pathname: string }; // pathname: 브랜드 영문 이름
  name: string;
  price: number;
}
