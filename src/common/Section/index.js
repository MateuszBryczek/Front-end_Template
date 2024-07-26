import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    grid-gap: 5px;
`;

export const ArticleHeader = styled.h1`
    text-align: center;
`;

export const SectionHeader = styled.h2`

    padding-top: 10px;
    margin-top: 40px;
    border-top: solid 1px;
    border-color: ${({ theme }) => theme.section.border};
`;

export const Article = styled.article`
    box-shadow: 0px 5px 24px 0px ;
    margin-left: 10px;
    margin-right: 10px;
    padding: 12px;
    padding-bottom: 52px;
    background-color: ${({ theme }) => theme.section.background};
    color: ${({ theme }) => theme.section.textPrimary};
`;

export const Section = styled.section`
    margin: 10px;
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

export const Hint = styled.p`
    background-color: ${({ theme }) => theme.hint.background};
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
`;