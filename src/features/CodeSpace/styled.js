import styled from "styled-components";

export const StyledCodeSpace = styled.pre`
  background-color: ${({ theme }) => theme.CodeSpace.background};
  color: ${({ theme }) => theme.CodeSpace.default};
  padding: 15px;
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.CodeSpace.default};
  font-size: large;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 0px 5px 24px 0px black;
`;