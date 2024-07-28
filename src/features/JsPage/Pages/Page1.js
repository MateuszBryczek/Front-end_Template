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
        <ArticleHeader id="1">"Hello World!"</ArticleHeader>
        <Article>
            <SectionHeader>Writing JavaScript Code</SectionHeader>
<Section>
JavaScript codes should be writen inside the <Highlighted>&lt;script&gt;</Highlighted> element.
<CodeSpace>               
{`
1|<script>
2|  console.log("Hello World!");
3|<script>
`}
</CodeSpace>
<Hint>
Old JavaScript examples may use a type attribute: <Highlighted>&lt;script type="text/javascript"&gt;</Highlighted> .
The type attribute is not required. JavaScript is the default scripting language in HTML.
</Hint>
But where you should put the <Highlighted>&lt;script&gt;</Highlighted> element? It can be either placen in the <Highlighted>&lt;head&gt;</Highlighted> , in the <Highlighted>&lt;body&gt;</Highlighted> or both.
</Section>

<SectionHeader>What's the defference?</SectionHeader>
<Section>
When the <Highlighted>&lt;script&gt;</Highlighted> is inside <Highlighted>&lt;head&gt;</Highlighted> , it loads before the content of the page loads. But when it's inside the <Highlighted>&lt;body&gt;</Highlighted> , it loads after the content of the page loads.<br/>
It is recommended to put the <Highlighted>&lt;script&gt;</Highlighted> tag in the body when using internal JavaScript.
<Hint>
Placing scripts at the bottom of the <Highlighted>&lt;body&gt;</Highlighted> element improves the display speed, because script interpretation slows down the display.
</Hint>
</Section>

<SectionHeader>JavaScript Functions</SectionHeader>
<Section>
A JavaScript <Highlighted>function</Highlighted> is a block of JavaScript code, that can be executed when "called" for.<br/>
For example, a function can be called when an event occurs, like when the user clicks a button.
<p>In this example, a JavaScript <Highlighted>function</Highlighted> is placed in the <Highlighted>&lt;body&gt;</Highlighted> section of an HTML page. The function is invoked (called) when a button is clicked:</p>
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
JavaScript can also be placed in external files.<br />
External scripts are practical when the same code is used in many different web pages.<br/>
JavaScript files have the file name extension  of <Highlighted>.js</Highlighted> .
To use an external script, put the name of the script file in the <Highlighted>src</Highlighted> (source) attribute of a <Highlighted>&lt;script&gt;</Highlighted> tag:
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
You can place an external script reference in <Highlighted>&lt;head&gt;</Highlighted> or <Highlighted>&lt;body&gt;</Highlighted> as you like.
<Hint>
External scripts cannot contain <Highlighted>&lt;script&gt;</Highlighted> tags.
</Hint>
</Section>

<SectionHeader>External JavaScript Advantages</SectionHeader>
<Section>
Placing scripts in external files has some advantages, like:<br/>
<ul>
    <li>It separates HTML HTML and code</li>
    <li>It help organizes codes and maintain readability of HTML and JavaScript</li>
    <li>Can speed up page loads by cached JavaScript</li>
</ul>
<Hint>
You can add multiple script files to one page by using multiple different script tags.
</Hint>
</Section>



        </Article>

        <ArticleHeader id="2">2</ArticleHeader>
        <Article>
            <CodeSpace>
{`
console.log("Hello World! 2");
`}
            </CodeSpace>
        </Article>

        <ArticleHeader id="3">3</ArticleHeader>
        <Article>
            <CodeSpace>
{`
console.log("Hello World! 3");
`}
            </CodeSpace>
        </Article>
    </ArticleWrapper>
    </>
);

export default Page1;