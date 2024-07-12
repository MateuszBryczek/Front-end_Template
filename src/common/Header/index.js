import styled from "styled-components";

export const Header = styled.h1`
    height: auto;
    width: auto;
    text-align: center;
    font-weight: bold;
    text-shadow: 0px 2px 5px black;
    color: ${({ $getThemeColor }) => $getThemeColor};
`;