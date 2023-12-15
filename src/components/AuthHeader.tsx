import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import HomeIcon from "@/assets/home.svg?react";

import Button from "./Button";

export default function AuthHeader({ title }: { title: string }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Icons>
        <Button
          iconOnly
          onClick={() => navigate(-1)}
          aria-label="이전 페이지 이동"
        >
          <IoIosArrowBack size={24} />
        </Button>
        <Link to="/" aria-label="홈">
          <HomeIcon />
        </Link>
      </Icons>
      <h1>{title}</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  h1 {
    text-align: center;
    ${({ theme }) => theme.typo["title-1-b"]};
    margin-top: 27px;
  }
`;

const Icons = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    color: #676767;
  }
`;
