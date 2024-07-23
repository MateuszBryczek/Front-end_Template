import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    grid-gap: 5px;
`;

export const ArticleHeader = styled.h2`
    text-align: center;
    
`;

export const SectionHeader = styled.h2`
    
`;

export const Article = styled.article`
    box-shadow: 0px 5px 24px 0px ;
    margin-left: 10px;
    margin-right: 10px;
    padding: 12px;
    background-color: ${({ theme }) => theme.section.background};
    color: ${({ theme }) => theme.section.textPrimary};
`;

export const Section = styled.section`
    margin: 5px;
`;

export const ArticleWrapper = styled.div`
    grid-column: 2/3;
`;

export const Highlighted = styled.p`
    display: inline;
    background-color: ${({ theme }) => theme.highlighted.background};
    color: ${({ theme }) => theme.highlighted.textPrimary};
    border-radius: 8px ;
    padding: 2px;
`;