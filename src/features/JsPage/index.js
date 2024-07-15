import { Header } from "../../common/Header";
import { 
    Wrapper, 
    SectionHeader, 
    Section, 
    SectionWrapper 
} from "../../common/Section";
import NavScrollbar from "../../common/Navigation/NavScrollbar";
import useThemeColor from "../useThemeColor/useThemeColor";

const JsPage = () => {
    const themeColor = useThemeColor();

    return (
    <>
    <Wrapper>
        <NavScrollbar/>
        <Header $getThemeColor={ themeColor }>JavaScript</Header>
            <SectionWrapper>
                <SectionHeader id="1">1</SectionHeader>
                    <Section >1</Section>
                <SectionHeader id="2">2</SectionHeader>
                    <Section >2</Section>
                <SectionHeader id="3">3</SectionHeader>
                    <Section >3</Section>
                <SectionHeader id="4">4</SectionHeader>
                    <Section >4</Section>
            </SectionWrapper>
    </Wrapper>
    </>
);
};

export default JsPage;