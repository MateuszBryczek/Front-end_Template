import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";

export const JavaScriptStatements = () => (
<>
<ArticleHeader id="3">JavaScript Statements</ArticleHeader>
        <Article>
<SectionHeader>JavaScript Statements</SectionHeader>
<Section>
<b>JavaScript programs</b> consist of <b>statements</b> with appropirate syntax.<br/>
A single JavaScript <b>statement</b> may span a single or multiple lines.<br/>
JavaScript <b>statements</b> scholuld be ended or be separated by <b>semicolons</b> <Highlighted>;</Highlighted> .
<Hint>JavaScript programs (and JavaScript statements) are often called <b>JavaScript code</b>.</Hint>
Examples of <b>single line</b> statements:
<CodeSpace>
{`
 1|document.getElementById("demo").innerHTML = "single line statement";
`}
</CodeSpace>
<CodeSpace>
{`
 1|document.getElementById("demo").innerHTML = 
 2|"multiple line statement";
`}
</CodeSpace>
<Hint>
If a JavaScript statement does not fit on one line, the best place to break it is after an operator.
</Hint>
</Section>

<SectionHeader>JavaScript Code Block</SectionHeader>
<Section>
JavaScript statements can be grouped together in <b>code blocks</b>, inside <b>curly brackets</b> <Highlighted>{`{...}`}</Highlighted> .<br/>
The purpose of code blocks is to define statements to be executed together.
<CodeSpace>
{`
 1|function myFunction() {
 2|  document.getElementById("demo1").innerHTML = "Hello World 1!";
 3|  document.getElementById("demo2").innerHTML = "Hello World 2!";
 4|}
`}
</CodeSpace>
</Section>
        </Article>
</>
);