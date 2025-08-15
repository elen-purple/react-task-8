import styled from "styled-components";

export const Item = styled.li``;

export const Button = styled.button`
  padding: 8px 20px;
  font-weight: 400;
  font-size: 20px;
  border-radius: 40px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;

  ${Item} {
    &:nth-child(1) ${Button} {
      background-color: #16a406ff;
    }
    &:nth-child(2) ${Button} {
      background-color: #e6ca16ff;
    }
    &:nth-child(3) ${Button} {
      background-color: #ff4326ff;
    }
  }

  ${(props) =>
    props.$isDark
      ? `
    
    ${Button}{
       color: #ecf8feff;
    }
    `
      : `
    ${Button}{
       color: #141415ff;
    }
    `}
`;
