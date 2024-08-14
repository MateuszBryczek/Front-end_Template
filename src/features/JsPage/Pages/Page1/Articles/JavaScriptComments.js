import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";

export const JavaScriptComments = () => (
<>
    <ArticleHeader id="6">JavaScript Comments</ArticleHeader>
        <Article>
<SectionHeader>Single Line Comments</SectionHeader>
<Section>
Single line comments start with two <b>forward slash</b> <Highlighted>//</Highlighted> .<br/>
Any text between <Highlighted>//</Highlighted> and the end of the line will be ignored by JavaScript (<b>will not be executed</b>).
<CodeSpace>
{`
// comment
let x = 5;      // declare x and give it the value 5
let y = x + 10; // declare y and give it the value x + 10
`}
</CodeSpace>
</Section>

<SectionHeader>Multi-Line Comments</SectionHeader>
<Section>
Multi-line comments start with <Highlighted>/*</Highlighted> and end with <Highlighted>*/</Highlighted> .<br />
Any text between <Highlighted>/*...*/</Highlighted> will be ignored by JavaScript.
<CodeSpace>
{`
/*comment

*/
`}
</CodeSpace>
</Section>
        </Article>
</>
);