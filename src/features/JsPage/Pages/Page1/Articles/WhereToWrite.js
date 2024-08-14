import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";

export const WhereToWrite = () => (
<>
<ArticleHeader id="1">Where to write</ArticleHeader>
        <Article>
            <SectionHeader>Writing JavaScript Code</SectionHeader>
<Section>
JavaScript codes should be writen inside the <Highlighted>{`<script>`}</Highlighted> element.
<CodeSpace>               
{`
<script>
  console.log("Hello World!");
<script>
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
<p />
In this example, a JavaScript <b>function</b> is placed in the <Highlighted>{`<body>`}</Highlighted> section of an HTML page. The function is invoked (called) when a button is clicked:
<CodeSpace>
{`
<!DOCTYPE html>
<html>
  <head>
    <title> Front-End_Template </title>
  </head>

  <body>
    <h1>JavaScript Function Demo</h1>

    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Hello JavaScript!"
      };
    </script>
  </body>
</html>
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
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello External JavaScript!"
  }
`}
</CodeSpace>
<CodeSpace>
{`
<script src="myScript.js"></script>
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
</>
);