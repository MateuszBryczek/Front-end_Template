import styled from "styled-components";

export const StyledCodeSpace = styled.pre`
  background-color: #f5f5f5;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.CodeSpace.default};
`;