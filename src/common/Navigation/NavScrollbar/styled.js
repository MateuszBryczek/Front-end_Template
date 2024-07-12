import styled from "styled-components";

export const Wrapper = styled.nav`
    max-width: 100px;
    height: 100%;
    position: sticky;
    top: 110px;
    margin-left: 5px;
    grid-column: 1;
    grid-row: 1/span 2;
`;

export const StyledList = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
`;

export const StyledLink = styled.li`
    width: 100%;
    text-decoration: none;
    padding: 5px;
    border: solid 1px;
    margin: 1px;

    &:hover {
        cursor: pointer;
    }
`;