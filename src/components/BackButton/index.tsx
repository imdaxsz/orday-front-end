import { useNavigate } from "react-router-dom";

import ArrowBack from "@/assets/arrow_back.svg?react";

import { BackContainer, Title } from "./style";

interface BackButtonProps {
  pageTitle: string;
}

export default function BackButton({ pageTitle }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <>
      <BackContainer>
        <ArrowBack onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
        <Title>{pageTitle}</Title>
      </BackContainer>
    </>
  );
}
