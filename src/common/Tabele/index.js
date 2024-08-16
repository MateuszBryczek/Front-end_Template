import { 
    StyledTable,
    StyledTh,
    StyledTd,
    StyledTr
} from "./styled";

const Table = ({ columns, data }) => {
    return (
        <StyledTable>
            <thead>
                <StyledTr>
                    {columns.map((column, index) => (
                        <StyledTh key={index}>{column}</StyledTh>
                    ))}
                </StyledTr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <StyledTr key={rowIndex}>
                        {columns.map((column, columnIndex) => (
                            <StyledTd key={columnIndex}>{row[column]}</StyledTd>
                        ))}
                    </StyledTr>
                ))}
            </tbody>
        </StyledTable>
    );
};

export default Table;