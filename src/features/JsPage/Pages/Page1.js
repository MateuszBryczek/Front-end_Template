import { SectionHeader, Section, SectionWrapper } from "../../../common/Section";
import CodeSpace from "../../CodeSpace/CodeSpace";

export const Page1 = () => (
    <>
    <SectionWrapper>
        <SectionHeader id="1">"Hello World!"</SectionHeader>
        <Section>
            <CodeSpace>
{`
console.log("Hello World!");
`}
            </CodeSpace>
        </Section>

        <SectionHeader id="2">"Hello World! 2"</SectionHeader>
        <Section>
            <CodeSpace>
{`
console.log("Hello World! 2");
`}
            </CodeSpace>
        </Section>

        <SectionHeader id="3">"Hello World! 3"</SectionHeader>
        <Section>
            <CodeSpace>
{`
console.log("Hello World! 3");
`}
            </CodeSpace>
        </Section>
    </SectionWrapper>
    </>
);

export default Page1;