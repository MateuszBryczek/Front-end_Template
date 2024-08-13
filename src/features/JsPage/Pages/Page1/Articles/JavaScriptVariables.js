import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";

export const JavaScriptVariables = () => (
<>
    <ArticleHeader id="5">JavaScript Variables</ArticleHeader>
        <Article>
<SectionHeader>What are Variables?</SectionHeader>
<Section>
Variables are <b>containers</b> for <b>storing data</b>, and they can by declared i 4 ways:
<ul>
    <li>Automatically</li>
    <li>Using <Highlighted>var</Highlighted></li>
    <li>Using <Highlighted>let</Highlighted></li>
    <li>Using <Highlighted>const</Highlighted></li>
</ul>
</Section>
<SectionHeader>Automatic declaration</SectionHeader>
<Section>
In this example, <b>x</b> , <b>y</b> , and <b>sum</b> are <b>undeclared variables</b>. They are <b>automatically</b> declared when first used:
<CodeSpace>
{`
 1|x = 5;
 2|y = 10;
 3|sum = x + y;
`}
</CodeSpace>
<Hint>
It is considered good programming practice to always declare variables before use.
</Hint>
</Section>

<SectionHeader>Using var</SectionHeader>
<Section>
Variables declared with <Highlighted>var</Highlighted> :
<ul>
    <li>Have <b>Global Scope</b>.</li>
    <li>Does not have to be <b>Declared</b></li>
    <li>Can be <b>Redeclared</b> anywhere in a program.</li>
</ul>
<CodeSpace>
{`
 1|var x = 5;
 2|var y = 10;
 3|var sum = x + y;
`}
</CodeSpace>
<Hint>
The <Highlighted>var</Highlighted> keyword was used in all JavaScript code from 1995 to 2015.<br />
<Highlighted>let</Highlighted> and <Highlighted>const</Highlighted> keywords were added in 22015.<br />
<Highlighted>var</Highlighted> should only be used in code for older browsers,
</Hint>
</Section>

<SectionHeader>Using let</SectionHeader>
<Section>
Variables declared with <Highlighted>let</Highlighted> :
<ul>
    <li>Have <b>Block Scope</b>.</li>
    <li>Must be <b>Declared</b> before use.</li>
    <li>Cannot be <b>Redeclared</b> in the same scope.</li>
</ul>
<CodeSpace>
{`
 1|let x = 5;
 2|let y = 10;
 3|let sum = x + y;
`}
</CodeSpace>
</Section>

<SectionHeader>Using const</SectionHeader>
<Section>
Variables declared with <Highlighted>const</Highlighted> :
<ul>
    <li>Have <b>Block Scope</b>.</li>
    <li>Cannot be <b>Reassigned</b>.</li>
    <li>Cannot be <b>Redeclared</b>.</li>
</ul>
<CodeSpace>
{`
 1|const x = 5;
 2|const y = 10;
 3|const sum = x + y;
`}
</CodeSpace>
</Section>

<SectionHeader>Global Scope and Block Scope</SectionHeader>
<Section>
Variables declared with the <Highlighted>var</Highlighted> always have <b>Global Scope</b>.<br/>
That means that variables declared with <Highlighted>var</Highlighted> inside a <Highlighted>{`{...}`}</Highlighted> block can be accessed from outside the block.<br/>
<p />
Variables declared with <Highlighted>let</Highlighted> and <Highlighted>const</Highlighted> keywords provided <b>Block Scope</b> in JavaScript, what is the complete opposite of <b>Global Scope</b>.<br />
That means that variables declared inside a <Highlighted>{`{...}`}</Highlighted> block cannot be accessed from outside the block.
</Section>
<SectionHeader>Difference Between var, let and const</SectionHeader>
<Section>

</Section>
        </Article>
</>
);