import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
    width: 200px;
    height: 100%;
    margin-left: 5px;
    grid-column: 1;
    grid-row: 1/span 2;
    background-color: ${({ $getThemeColor }) => $getThemeColor.primary};
    transition: background-color 1s;
`;

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0px;
    margin: 0px;
    position: sticky;
    top: 105px;
`;

export const StyledLink = styled(NavLink)`
    width: auto;
    text-decoration: none;
    padding: 5px;
    border-bottom: solid 1px ;
    color: ${({ theme }) => theme.colors.textPrimary};

    &:hover {
        cursor: pointer;
        background-color: ${({ $getThemeColor }) => $getThemeColor.secondary};
    }
`;