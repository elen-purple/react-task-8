import styled from "styled-components";

export const Text = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${(props) => (props.$isDark ? `#ecf8feff` : `#141415ff`)};
`;
