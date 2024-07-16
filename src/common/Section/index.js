import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    grid-gap: 5px;
`;

export const SectionHeader = styled.h2`
    text-align: center;
    
`;

export const Section = styled.section`
    box-shadow: 0px 5px 24px 0px ;
    margin-left: 10px;
    margin-right: 10px;
    padding: 12px;
`;

export const SectionWrapper = styled.div`
    grid-column: 2/3;
`;