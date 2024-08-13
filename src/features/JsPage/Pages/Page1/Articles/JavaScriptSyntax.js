import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";

export const JavaScriptSyntax = () => (
<>
    <ArticleHeader id="4">JavaScript Syntax</ArticleHeader>
        <Article>
<SectionHeader>JavaScript Syntax</SectionHeader>
<Section>
<b>JavaScript syntax</b> is the set of rules, that should be followed to create correct-constructed programs.
</Section>

<SectionHeader>Variable Declaration</SectionHeader>
<Section>
In programing language, <b>variables</b> are use to <b>store</b> data values.<br />
JavaScript used the keywords <Highlighted>var</Highlighted> , <Highlighted>let</Highlighted> and <Highlighted>const</Highlighted> to <b>declare</b> variables.<br />
An <b>equal sign</b> <Highlighted>=</Highlighted> is used to <b>assign values</b> to varables.
<CodeSpace>
{`
 1|let number = 5;
 2|document.write(number);
`}
</CodeSpace>
</Section>

<SectionHeader>JavaScript is Case-Sensitive</SectionHeader>
<Section>
JavaScript identifiers are sensitively cased.
<CodeSpace>
{`
 1|let number = 5;
 2|let Number = 10;
 3|
 4|let sum = number = Number;
 5|document.write(sum);
`}
</CodeSpace>
In this example, the variables are <b>different</b>.
</Section>
        </Article>
</>
);