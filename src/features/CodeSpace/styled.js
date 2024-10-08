import styled from "styled-components";

export const StyledCodeSpace = styled.pre`
  background-color: ${({ theme }) => theme.CodeSpace.background};
  color: ${({ theme }) => theme.CodeSpace.default};
  padding: 15px;
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  font-size: large;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 0px 5px 24px 0px black;
`;

export const LineNumber = styled.span`
  display: inline-block;
  width: 45px;
  text-align: right;
  padding-right: 10px;
  color: ${({ theme }) => theme.CodeSpace.Grey};
  user-select: none;
`;

export const CodeLine = styled.span`
  display: inline;
`;