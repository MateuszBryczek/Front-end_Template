import { SectionHeader, Section, Wrapper } from "../../../common/Section";
import CodeSpace from "../../CodeSpace/CodeSpace";

export const Page2 = () => (
    <>
    <SectionHeader id="Page2">"Hello World! 2"</SectionHeader>
        <Section>
            <CodeSpace>
{`
console.log("Hello World!");
`}
            </CodeSpace>
        </Section>
    </>
);

export default Page2;