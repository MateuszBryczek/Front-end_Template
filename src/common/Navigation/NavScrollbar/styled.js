import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
    padding: 5px;
    position: sticky;
    top: 110px;
`;

export const StyledList = styled.ul`
    
`;

export const StyledLink = styled.li`
    text-decoration: none;
    display: inline;
    padding: 5px;
    margin: 5px;
    border: solid 2px;

    &:hover {
        cursor: pointer;
    }
`;