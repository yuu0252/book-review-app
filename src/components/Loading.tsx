import HashLoader from "react-spinners/HashLoader";
import { styled } from "styled-components";

export const Loading = () => {
  return (
    <StyledLoading>
      <HashLoader />
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
