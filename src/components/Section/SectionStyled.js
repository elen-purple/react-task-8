import styled from "styled-components";

export const Sect = styled.section`
  padding: 60px 0;

  ${(props) =>
    props.$isDark
      ? `
    background-color: #141415ff;

    ${Title}{
    color: #ecf8feff;
    }
    `
      : `
    background-color: #ecf8feff;

    ${Title}{
    color: #141415ff;
    }
    `}
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  text-align: center;
  font-size: 36px;
  font-weight: 400;
`;
