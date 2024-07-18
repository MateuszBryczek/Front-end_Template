import { Header } from "../../common/Header";
import { 
    Wrapper, 
    SectionHeader, 
    Section, 
    SectionWrapper 
} from "../../common/Section";
import NavScrollbar from "../../common/Navigation/NavScrollbar";
import useThemeColor from "../useThemeColor/useThemeColor";
import CodeSpace from "../CodeSpace/CodeSpace";

const JsPage = () => {
    const themeColor = useThemeColor();

    return (
    <>
    <Wrapper>
        <NavScrollbar/>
        <Header $getThemeColor={ themeColor }>JavaScript</Header>
            <SectionWrapper>
                <SectionHeader id="1">"Hello World!"</SectionHeader>
                    <Section>
                        <CodeSpace>
{`
console.log("Hello World!");
`}
                        </CodeSpace>
                    </Section>
                <SectionHeader id="2">2</SectionHeader>
                    <Section>
                        <CodeSpace>
{`

`}
                        </CodeSpace>
                        </Section>
                <SectionHeader id="3">3</SectionHeader>
                    <Section>
                        <CodeSpace>
{`

`}
                        </CodeSpace>
                    </Section>
                <SectionHeader id="4">4</SectionHeader>
                    <Section>
                        <CodeSpace>
{`

`}
                        </CodeSpace>
                    </Section>
                <SectionHeader id="5">5</SectionHeader>
                    <Section>
                        <CodeSpace>
{`

`}
                        </CodeSpace>
                    </Section>
                <SectionHeader id="6">6</SectionHeader>
                    <Section>
                        <CodeSpace>
{`

`}
                        </CodeSpace>
                    </Section>
            </SectionWrapper>
    </Wrapper>
    </>
);
};

export default JsPage;