import { Header } from "../../common/Header";
import { 
    Wrapper, 
    ArticleHeader, 
    Article, 
    ArticleWrapper 
} from "../../common/Section";
import NavScrollbar from "../../common/Navigation/NavScrollbar";
import useThemeColor from "../useThemeColor/useThemeColor";

const CssPage = () => {
    const themeColor = useThemeColor();
    
    return (
    <>
    <Wrapper>
        <NavScrollbar/>
        <Header $getThemeColor={ themeColor }>CSS</Header>
            <ArticleWrapper>
                <ArticleHeader id="1">1</ArticleHeader>
                    <Article >1</Article>
                <ArticleHeader id="2">2</ArticleHeader>
                    <Article >2</Article>
                <ArticleHeader id="3">3</ArticleHeader>
                    <Article >3</Article>
            </ArticleWrapper>
    </Wrapper>
    </>
);
};

export default CssPage;