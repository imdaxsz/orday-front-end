import { useRef } from "react";

import {
  BodyContainer,
  Ad,
  AdImage,
  Comment,
  AdText,
  KeyWord,
  Product,
  Price,
} from "../style";

import Action from "./Action";

const ContentData = {
  keyword: "[NEW!]",
  product: "프라이탁 HWAII FIVE-O 화이트 메신저백",
  price: "248,000",
};

export default function ReviewContent() {
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const focusCommentInput = () => {
    if (commentRef.current) {
      commentRef.current.focus();
    }
  };

  return (
    <>
      <BodyContainer />
      <Ad>
        <AdImage />
        <AdText>
          <KeyWord>
            {ContentData.keyword}
            <Product>{ContentData.product}</Product>
          </KeyWord>
          <Price>{ContentData.price}원</Price>
        </AdText>
      </Ad>
      <Comment ref={commentRef} placeholder="최소 100자 이상 작성하세요." />
      <Action commentRef={commentRef} focusCommentInput={focusCommentInput} />
    </>
  );
}
