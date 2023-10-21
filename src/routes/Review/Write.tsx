import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseCircleFill } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Head from "@/components/Head";
import useTextarea from "@/hooks/useTextarea";
import useWriteReview from "@/hooks/useWriteReview";

import Rating from "./Rating";

export default function WriteReview() {
  const PRODUCT_MOCK_DATA = {
    id: "1",
    image: "",
    name: "파타고니아 레트로 x 양털 후리스 뽀글이 플리스 자켓",
  };

  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const {
    text,
    setText,
    rating,
    onRatingChange,
    fileUrl,
    onFileChange,
    clearFile,
    onSubmit,
  } = useWriteReview({ mode });

  const { textareaRef, setTextareaHeight } = useTextarea();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
    setTextareaHeight();
  };

  return (
    <Container>
      <Head title="에디터 | Orday" />
      <BackButton pageTitle="리뷰작성/수정" />
      <ProductInfo>
        <img src={PRODUCT_MOCK_DATA.image} alt={PRODUCT_MOCK_DATA.name} />
        <div>
          <h3>{PRODUCT_MOCK_DATA.name}</h3>
          <Rating rating={rating} onClick={onRatingChange} />
        </div>
      </ProductInfo>
      <Form onSubmit={onSubmit}>
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          ref={textareaRef}
          value={text}
          placeholder="리뷰를 작성해주세요."
          onChange={onChange}
        />
        <label htmlFor="photo">사진</label>
        <PhotoContainer>
          {!fileUrl ? (
            <label htmlFor="photo">
              <AiOutlinePlus color="#AEAEAE" size={24} />
            </label>
          ) : (
            <img src={fileUrl} alt="attachment" />
          )}
          {fileUrl && <RiCloseCircleFill size={24} onClick={clearFile} />}
        </PhotoContainer>
        <input
          id="photo"
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
        <Buttons>
          <Button type="button" $variant="outline">
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

  h3,
  label {
    ${({ theme }) => theme.typo["body-2-b"]};
    color: ${({ theme }) => theme.colors["neutral"]["70"]};
  }

  h3 {
    margin: 17px 0 8px;
    line-height: 170%;
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

  & > svg {
    fill: ${({ theme }) => theme.colors["primary"]["80"]};
    position: absolute;
    right: 5px;
    top: 5px;
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
