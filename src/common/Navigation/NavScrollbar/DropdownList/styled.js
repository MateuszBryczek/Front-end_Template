import styled from "styled-components";

export const DropdownList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const DropdownItem = styled.li`
    padding: 8px 16px;

    &:hover {
        cursor: pointer;
        background-color: #f0f0f0;
    }
`;