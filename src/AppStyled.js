import styled from "styled-components";

export const Main = styled.main`
  background-color: ${(props) => (props.$isDark ? `#141415ff` : `#ecf8feff`)};
  min-height: 100vh;
`;
