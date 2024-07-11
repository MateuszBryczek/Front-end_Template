import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { SectionHeader } from "../../common/SectionHeader";
import NavScrollbar from "../../common/Navigation/NavScrollbar";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { getThemeColor } from "../getThemeColor/getThemeColor";

const CssPage = () => {
    const location = useLocation();
    const theme = useTheme();
    
    return (
    <>
        <Header $getThemeColor={getThemeColor(location.pathname, theme)}>CSS</Header>
        <NavScrollbar/>
            <SectionHeader id="1">1</SectionHeader>
                <Section >1</Section>
            <SectionHeader id="2">2</SectionHeader>
                <Section >2</Section>
            <SectionHeader id="3">3</SectionHeader>
                <Section >3</Section>
    </>
);
};

export default CssPage;