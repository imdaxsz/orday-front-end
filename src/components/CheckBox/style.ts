import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: inline-block;
  user-select: none;
`;

export const CheckboxText = styled.label`
  margin-left: 0.5rem;
`;

export const CheckboxInput = styled.input`
  accent-color: ${({ theme }) => theme.colors["primary"]["80"]};
  cursor: pointer;
`;
