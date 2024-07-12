import { Header } from "../../common/Header";
import { 
    Wrapper, 
    SectionHeader, 
    Section, 
    SectionWrapper 
} from "../../common/Section";
import NavScrollbar from "../../common/Navigation/NavScrollbar";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { getThemeColor } from "../getThemeColor/getThemeColor";

const CssPage = () => {
    const location = useLocation();
    const theme = useTheme();
    
    return (
    <>
    <Wrapper>
        <NavScrollbar/>
        <Header $getThemeColor={getThemeColor(location.pathname, theme)}>CSS</Header>
            <SectionWrapper>
                <SectionHeader id="1">1</SectionHeader>
                    <Section >1</Section>
                <SectionHeader id="2">2</SectionHeader>
                    <Section >2</Section>
                <SectionHeader id="3">3</SectionHeader>
                    <Section >3</Section>
            </SectionWrapper>
    </Wrapper>
    </>
);
};

export default CssPage;