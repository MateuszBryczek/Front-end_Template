import { Header } from "../../common/Header";
import { SectionHeader, Section } from "./styled";

const CssPage = () => (
    <>
        <Header>CSS</Header>
        <SectionHeader id="1"></SectionHeader>
        <Section ></Section>
        <SectionHeader id="2">2</SectionHeader>
        <Section >2</Section>
        <SectionHeader id="3">3</SectionHeader>
        <Section >3</Section>
    </>
);

export default CssPage;