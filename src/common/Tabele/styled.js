import styled from "styled-components"

export const StyledTable = styled.table`
    background-color: ${({theme}) => theme.table.secondary};
    text-align: center;
    border-collapse: collapse;
    width: 100%;
    font-size: large;
    margin-top: 18px;
    margin-bottom: 18px;
    box-shadow: 0px 5px 24px 0px;
`;

export const StyledTh = styled.th`
    background-color: ${({theme}) => theme.table.primary};
    border: 1px solid;
    border-color: ${({theme}) => theme.table.border};
    padding: 8px;
`;

export const StyledTd = styled.td`
    border: 1px solid;
    border-color: ${({theme}) => theme.table.border};
    padding: 4px;
`;

export const StyledTr = styled.tr`
    &:nth-child(even) {
        background-color: ${({theme}) => theme.table.primary};
    }
`;