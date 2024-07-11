import styled from "styled-components";

export const Header = styled.h1`
    text-align: center;
    font-weight: bold;
    text-shadow: 0px 2px 5px black;
    color: ${({ $getThemeColor }) => $getThemeColor};
`;