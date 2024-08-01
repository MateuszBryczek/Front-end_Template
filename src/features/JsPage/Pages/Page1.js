import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    ArticleWrapper,
    Section,
    Highlighted,
    Hint,
} from "../../../common/Section";
import CodeSpace from "../../CodeSpace/CodeSpace";

export const Page1 = () => (
    <>
    <ArticleWrapper>
        <ArticleHeader id="1">Where to write</ArticleHeader>
        <Article>
            <SectionHeader>Writing JavaScript Code</SectionHeader>
<Section>
JavaScript codes should be writen inside the <Highlighted>{`<script>`}</Highlighted> element.
<CodeSpace>               
{`
1|<script>
2|  console.log("Hello World!");
3|<script>
`}
</CodeSpace>
<Hint>
Old JavaScript examples may use a type attribute: <b>&lt;script type="text/javascript"&gt;</b> .
The type attribute is not required. JavaScript is the default scripting language in HTML.
</Hint>
But where you should put the <Highlighted>{`<script>`}</Highlighted> element? It can be either placen in the <Highlighted>{`<head>`}</Highlighted> , in the <Highlighted>{`<body>`}</Highlighted> or both.
</Section>

<SectionHeader>What's the defference?</SectionHeader>
<Section>
When the <Highlighted>{`<script>`}</Highlighted> is inside <Highlighted>{`<head>`}</Highlighted> , it loads before the content of the page loads. But when it's inside the <Highlighted>{`<body>`}</Highlighted> , it loads after the content of the page loads.<br/>
It is recommended to put the <Highlighted>{`<script>`}</Highlighted> tag in the body when using internal JavaScript.
<Hint>
Placing scripts at the bottom of the <Highlighted>{`<body>`}</Highlighted> element improves the display speed, because script interpretation slows down the display.
</Hint>
</Section>

<SectionHeader>JavaScript Functions</SectionHeader>
<Section>
A JavaScript <b>function</b> is a block of JavaScript code, that can be executed when "called" for.<br/>
For example, a function can be called when an event occurs, like when the user clicks a button.
<p>In this example, a JavaScript <b>function</b> is placed in the <Highlighted>{`<body>`}</Highlighted> section of an HTML page. The function is invoked (called) when a button is clicked:</p>
<CodeSpace>
{`
 1|<!DOCTYPE html>
 2|<html>
 3|  <head>
 4|    <title> Front-End_Template </title>
 5|  </head>
 6|
 7|  <body>
 8|    <h1>JavaScript Function Demo</h1>
 9|
10|    <p id="demo">A Paragraph</p>
11|    <button type="button" onclick="myFunction()">Try it</button>
12|    <script>
13|      function myFunction() {
14|        document.getElementById("demo").innerHTML = "Hello JavaScript!"
15|      };
16|    </script>
17|  </body>
18|</html>
`}
</CodeSpace>
<Hint>
There will be much more about functions and events later.
</Hint>
</Section>

<SectionHeader>External JavaScript</SectionHeader>
<Section>
JavaScript can also be placed in <b>external files</b>.<br />
External scripts are practical when the same code is used in many different web pages.<br/>
JavaScript files have the file name extension  of <Highlighted>.js</Highlighted> .
To use an external script, put the name of the script file in the <Highlighted>src</Highlighted> (source) attribute of a <Highlighted>{`<script>`}</Highlighted> tag:
<CodeSpace>
{`
 1|function myFunction() {
 2|    document.getElementById("demo").innerHTML = "Hello External JavaScript!"
 3|  }
`}
</CodeSpace>
<CodeSpace>
{`
 1|<script src="myScript.js"></script>
`}
</CodeSpace>
You can place an external script reference in <Highlighted>{`<head>`}</Highlighted> or <Highlighted>{`<body>`}</Highlighted> as you like.
<Hint>
External scripts <b>cannot</b> contain <Highlighted>{`<script>`}</Highlighted> tags.
</Hint>
</Section>

<SectionHeader>External JavaScript Advantages</SectionHeader>
<Section>
Placing scripts in external files has some advantages, like:<br/>
<ul>
    <li>It separates HTML and code</li>
    <li>It help organizes codes and maintain readability of HTML and JavaScript</li>
    <li>Can speed up page loads by cached JavaScript</li>
</ul>
<Hint>
You can add multiple script files to one page by using multiple different script tags.
</Hint>
</Section>
        </Article>

        <ArticleHeader id="2">JavaScript Output</ArticleHeader>
        <Article>
<SectionHeader>JavaScript Displaying Output</SectionHeader>
<Section>
In JavaScript there are 4 ways of display output:
<ul>
    <li><Highlighted>innerHTML</Highlighted> - writing into the HTML element.</li>
    <li><Highlighted>console.log()</Highlighted> - writing into the browser console.</li>
    <li><Highlighted>document.write()</Highlighted> - writing into the HTML output.</li>
    <li><Highlighted>window.alert()</Highlighted> - writing into the alert box.</li>
</ul>
</Section>

<SectionHeader>Using innerHTML</SectionHeader>
<Section>
By using the <Highlighted>innerHTML</Highlighted> we can change the content or text of the selected element.
<CodeSpace>
{`
 1|function myFunction() {
 2|  const x = 5;
 3|  const y = 5;
 4|  const sum = x + y;
 5|
 6|  document.getElementById("demo").innerHTML = sum;
 7|}
`}
</CodeSpace>
</Section>
<SectionHeader>Using console.log()</SectionHeader>
<Section>
By using the <Highlighted>console.log()</Highlighted> funtion, we can write into the browser's developer console.
<CodeSpace>
{`
 1|const x = 5;
 2|const y = 5;
 3|const sum = x + y;
 4|
 5|console.log(sum);
`}
</CodeSpace>
<Hint><Highlighted>console.log()</Highlighted> can be very healpfull during <b>debugging</b> proces</Hint>

<SectionHeader>Using document.write()</SectionHeader>
<Section>
By using the <Highlighted>document.write()</Highlighted> function, we can write ti the content of the document.
<CodeSpace>
{`
 1|function myFunction() {
 2|  const x = 5;
 3|  const y = 5;
 4|  const sum = x + y;
 5|
 6|  document.write(sum);
 7|}
`}
</CodeSpace>
<Hint>Using <Highlighted>document.write()</Highlighted> after an HTML document is loaded, will <b>delete all existing HTML</b> in the current page! This method should only be used for testing.</Hint>
</Section>
</Section>
<SectionHeader>Using window.alert()</SectionHeader>
<Section>
By using <Highlighted>window.alert()</Highlighted> function, we can output data on a dialog box.<br />
You can skip the <Highlighted>window</Highlighted> keyword.
<CodeSpace>
{`
 1|function myFunction() {
 2|  const x = 5;
 3|  const y = 5;
 4|  const sum = x + y;
 5|
 6|  alert(sum);
 7|}
`}
</CodeSpace>
<Hint>In JavaScript, the <b>window</b> object is the <b>global scope object</b>. This means that variables, properties, and methods by default belong to the window object.</Hint>
</Section>
        </Article>

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

        <ArticleHeader id="4">JavaScript Syntax</ArticleHeader>
        <Article>

        </Article>

        <ArticleHeader id="5">JavaScript Variables</ArticleHeader>
        <Article>

        </Article>
    </ArticleWrapper>
    </>
);

export default Page1;