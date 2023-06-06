import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loader() {
  return (
    <Overlay>
      <PulseLoader
        color={"rgb(39, 100, 176)"}
        loading={true}
        size={25}
        aria-label="Loading Spinner"
      />
    </Overlay>
  );
}
