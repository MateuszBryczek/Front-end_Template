import { SectionHeader, Section, Wrapper } from "../../../common/Section";
import CodeSpace from "../../CodeSpace/CodeSpace";

export const Page1 = () => (
    <>
    <SectionHeader id="1">"Hello World!"</SectionHeader>
        <Section>
            <CodeSpace>
{`
console.log("Hello World!");
`}
            </CodeSpace>
        </Section>
    </>
);

export default Page1;