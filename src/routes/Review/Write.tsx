import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseCircleFill } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Head from "@/components/Head";
import Loader from "@/components/Loader";
import useWriteReview from "@/hooks/useWriteReview";

import Rating from "./Rating";

export default function WriteReview() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const id = searchParams.get("id");
  const orderId = searchParams.get("orderNo");
  const navigate = useNavigate();

  const {
    productInfo,
    form,
    handleContentChange,
    handleRatingChange,
    handleFileChange,
    clearFile,
    isImageCompressing,
    isReviewUploading,
    handleSubmit,
  } = useWriteReview({ mode, id: Number(id), orderId: Number(orderId) });

  const idIsNotNumber = (id: string | null) => {
    if (!id) return true;
    return !/^[0-9]+$/.test(id);
  };

  const handleCancelClick = () => {
    navigate("/myPage/reviews");
  };

  useEffect(() => {
    const redirect =
      !mode ||
      !["new", "edit"].includes(mode) ||
      idIsNotNumber(id) ||
      (mode === "new" && idIsNotNumber(orderId));
    if (redirect) navigate("/myPage/reviews", { replace: true });
  }, [mode, id, navigate, orderId]);

  return (
    <Container>
      {(isImageCompressing || isReviewUploading) && <Loader />}
      <Head title="에디터 | Orday" />
      <BackButton pageTitle="리뷰작성/수정" />
      <ProductInfo>
        <img src={productInfo.imageUrl} alt={productInfo.name} />
        <div>
          <h3>{productInfo.name}</h3>
          <span>
            {Boolean(productInfo.color) && (
              <>
                <strong>Color </strong>
                {productInfo.color}&nbsp;&nbsp;
              </>
            )}
            {Boolean(productInfo.size) && (
              <>
                <strong>Size </strong>
                {productInfo.size}
              </>
            )}
          </span>
          <Rating rating={form.rating} onClick={handleRatingChange} />
        </div>
      </ProductInfo>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={form.content}
          placeholder="리뷰를 작성해주세요. (최대 100자)"
          onChange={handleContentChange}
        />
        <label htmlFor="photo">사진</label>
        <PhotoContainer>
          {!form.fileUrl ? (
            <label htmlFor="photo">
              <AiOutlinePlus color="#AEAEAE" size={24} />
            </label>
          ) : (
            <img src={form.fileUrl} alt="attachment" />
          )}
          {form.fileUrl && (
            <Button iconOnly onClick={clearFile}>
              <RiCloseCircleFill size={24} />
            </Button>
          )}
        </PhotoContainer>
        <input
          id="photo"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <Buttons>
          <Button type="button" $variant="outline" onClick={handleCancelClick}>
            취소
          </Button>
          <Button type="submit">등록</Button>
        </Buttons>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 722px;
  margin: 0 auto;
  padding-bottom: 150px;

  svg {
    display: block;
    cursor: pointer;
  }

  label {
    ${({ theme }) => theme.typo["body-2-b"]};
    color: ${({ theme }) => theme.colors["neutral"]["70"]};
  }

  h3 {
    ${({ theme }) => theme.typo["body-2-r"]};
    margin-top: 12px;
    line-height: 170%;
  }

  span {
    display: block;
    margin-top: 3px;
    ${({ theme }) => theme.typo["body-3-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["50"]};
  }
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 100px;

  img {
    display: block;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #aeaeae;
    background-color: ${({ theme }) => theme.colors["neutral"]["10"]};
  }

  & > div > div {
    margin-top: 8px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 73px;

  & > label {
    margin-bottom: 5px;
    line-height: 170%;
  }

  textarea {
    all: unset;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 722px;
    min-height: 130px;
    padding: 20px;
    margin-bottom: 30px;
    ${({ theme }) => theme.typo["body-2-r"]};

    &::placeholder {
      ${({ theme }) => theme.typo["body-2-r"]};
    }
  }

  input[type="file"] {
    display: none;
  }
`;

const PhotoContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid #aeaeae;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  label {
    padding: 36px;
  }

  & > button {
    background-color: white;
    border-radius: 100%;
    position: absolute;
    right: 5px;
    top: 5px;

    & > svg {
      fill: ${({ theme }) => theme.colors["primary"]["80"]};
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 10px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 150px;

  button {
    width: 130px;
    padding: 15px 10px;
    ${({ theme }) => theme.typo["title-2-b"]};
    line-height: 100%;
  }
`;
