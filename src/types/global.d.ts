declare interface Phone {
  first: string;
  second: string;
  third: string;
}

declare type PHONEPART = keyof Phone;

declare interface BirthDate {
  year: string;
  month: string;
  day: string;
}

declare interface Address {
  postcode: string;
  address: string;
  addressDetail: string;
}

declare interface UserInfoForm {
  email: string;
  password: string;
  confirmPw: string;
  name: string;
  phone: string;
  birthDate: BirthDate;
  addressInfo: Address;
}

declare interface UserInfoFormError {
  password: number;
  confirmPw: boolean;
  phone: number;
  birthDate: boolean;
  address: boolean;
}

declare interface JoinFormError extends UserInfoFormError {
  email: number;
  name: boolean;
  terms: boolean;
}

declare interface ProductInfo {
  id: number;
  image: string;
  url: string;
  brand: { name: string; pathname: string }; // pathname: 브랜드 영문 이름
  name: string;
  price: number;
}
