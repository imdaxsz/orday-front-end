import styled from "styled-components";

export default function Backdrop({ onClick }: { onClick: () => void }) {
  return <Container onClick={onClick}></Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 110;
`;
