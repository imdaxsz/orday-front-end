import {
  ReviewImage,
  ProductInfo,
  ProductImage,
  Content,
  ProductText,
  ProductName,
  Price,
} from "./style";

interface Props {
  productId: number;
  productName: string;
  productImageUrl: string;
  reviewImageUrl: string;
  price: number;
  content: string;
}

export default function ReviewContent({
  productId,
  productName,
  productImageUrl,
  reviewImageUrl,
  price,
  content,
}: Props) {
  return (
    <>
      <ReviewImage src={reviewImageUrl} alt="PHOTO" />
      <ProductInfo to={`/product/${productId}?name=${productName}`}>
        <ProductImage src={productImageUrl} alt="PHOTO" />
        <ProductText>
          <ProductName>{productName}</ProductName>
          <Price>{price.toLocaleString()}원</Price>
        </ProductText>
      </ProductInfo>
      <Content>{content}</Content>
    </>
  );
}
