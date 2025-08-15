import styled from "styled-components";

export const Button = styled.button`
  padding: 4px;
  line-height: 0;
  border-radius: 50%;
  margin-left: auto;
`;

export const Head = styled.header`
  padding: 18px 0;

  ${(props) =>
    props.$isDark
      ? `
    background-color: #1b212cff;

    ${Button}{
    background-color: #233558ff;
    transform: rotate(360deg);
    }
    `
      : `
    background-color: #d8edf8ff;

    ${Button}{
    background-color: #c5e2f3ff;
    }
    `}
`;
