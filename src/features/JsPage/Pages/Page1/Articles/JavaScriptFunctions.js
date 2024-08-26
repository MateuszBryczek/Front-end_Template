import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";

export const JavaScriptFunctions = () => (
<>
    <ArticleHeader id="9">JavaScript Functions</ArticleHeader>
    <Article>
<SectionHeader>JavaScript Function Syntax</SectionHeader>
<Section>
A JavaScript function is defined with the <b>function</b> keyword, followed by a <b>name</b>, followed by <b>parentheses</b> <Highlighted>(...)</Highlighted>. <br />
The parentheses may include parameter names separated by <b>commas</b> <Highlighted>,</Highlighted> .<br />
The code to be executed, by the function, is placed inside <b>curly brackets</b> <Highlighted>{`{...}`}</Highlighted> .
<CodeSpace>
{`
function name(parametr1, parametr2, parametr3) {
  //code to be executed
}
`}
</CodeSpace>
</Section>
<SectionHeader>Function Invocation</SectionHeader>
<Section>
The code inside the function will execute when something <b>invokes</b> (calls) the function
<ul>
    <li>When an event occurs (like when user click a button)</li>
    <li>When it is invoked from JavaScript code</li>
    <li>Automatically (self invoked)</li>
</ul>
</Section>
<SectionHeader>Function Return</SectionHeader>
<Section>
The <Highlighted>return</Highlighted> statement is used in a function to <b>stop</b> its execution and to <b>return</b> a value to the <b>function caller</b>.
<CodeSpace>
{`
// function is called, the return value will end up in x
let x = myFunction(5, 10);

function myFunction(x, y) {
// function returns the addition of x and y
  return x + y;
}
`}
</CodeSpace>
</Section>

<SectionHeader>Function Scope</SectionHeader>
<Section>
Variables declared inside a function are called <b>local variables</b>. They can only be used inside the function where they was declared.
<Hint>If a <b>local variable</b> is used outside, the value's data type is <b>undefined</b>.</Hint>
</Section>

<SectionHeader>Why Use Functions?</SectionHeader>
<Section>
With <b>functions</b>, instead of writing a block of codes over and over again, we can just reuse same code many times.
</Section>
    </Article>
</>
);