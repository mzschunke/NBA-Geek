import styled from "styled-components";
import { RotateLoader } from "react-spinners";

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <Overlay>
      <RotateLoader color={"var(--blue)"} loading={true} size={60} />
    </Overlay>
  );
}
