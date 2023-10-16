import { styled } from "styled-components";

export const ModalContainer = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
`;

export const ModalContent = styled.div<{ $onSubmit: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ $onSubmit }) => ($onSubmit ? "400px" : "500px")};
  height: auto;
  background-color: #fff;
  padding: ${({ $onSubmit }) => ($onSubmit ? "none" : "20px")};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.h3`
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary["80"]};
  font-size: 20px;
`;

export const Detail = styled.p`
  margin-top: 42px;
`;

export const ButtonBox = styled.div`
  margin: 28px 0 45px 0;
  display: flex;
  justify-content: center;
  gap: 8px;
`;
export const ConfirmBtn = styled.button`
  width: 100px;
  height: 34px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary["80"]};
  color: #fff;
  cursor: pointer;
`;
export const CancelBtn = styled.button`
  width: 100px;
  height: 34px;
  border-radius: 5px;
  border: 1px solid #9d9d9d;
  background-color: ${({ theme }) => theme.colors.neutral["10"]};
  cursor: pointer;
`;
