import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  ${(props) =>
    props.$isDark
      ? `
  
      ${Text}{
      color: #ecf8feff;
      }
      `
      : `
  
      ${Text}{
      color: #141415ff;
      }
      `};
`;

export const Item = styled.li`
  font-size: 18px;
`;

export const Text = styled.p``;

export const Span = styled.span``;
