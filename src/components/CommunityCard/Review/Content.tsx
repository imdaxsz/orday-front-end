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

const ContentData = {
  product: "프라이탁 HWAII FIVE-O 화이트 메신저백",
  price: "248,000",
};

export default function ReviewContent() {
  return (
    <>
      <BodyContainer />
      <Ad>
        <AdImage />
        <AdText>
          <KeyWord>
            <Product>{ContentData.product}</Product>
          </KeyWord>
          <Price>{ContentData.price}원</Price>
        </AdText>
      </Ad>
      <Comment>리뷰 내용입니다.</Comment>
    </>
  );
}
