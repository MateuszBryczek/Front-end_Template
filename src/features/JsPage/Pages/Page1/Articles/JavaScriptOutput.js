import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";

export const JavaScriptOutput = () => (
<>
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
function myFunction() {
  const x = 5;
  const y = 5;
  const sum = x + y;

  document.getElementById("demo").innerHTML = sum;
}
`}
</CodeSpace>
</Section>
<SectionHeader>Using console.log()</SectionHeader>
<Section>
By using the <Highlighted>console.log()</Highlighted> funtion, we can write into the browser's developer console.
<CodeSpace>
{`
const x = 5;
const y = 5;
const sum = x + y;

console.log(sum);
`}
</CodeSpace>
<Hint><Highlighted>console.log()</Highlighted> can be very healpfull during <b>debugging</b> proces</Hint>

<SectionHeader>Using document.write()</SectionHeader>
<Section>
By using the <Highlighted>document.write()</Highlighted> function, we can write ti the content of the document.
<CodeSpace>
{`
function myFunction() {
  const x = 5;
  const y = 5;
  const sum = x + y;

  document.write(sum);
}
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
function myFunction() {
  const x = 5;
  const y = 5;
  const sum = x + y;

  alert(sum);
}
`}
</CodeSpace>
<Hint>In JavaScript, the <b>window</b> object is the <b>global scope object</b>. This means that variables, properties, and methods by default belong to the window object.</Hint>
</Section>
        </Article>
</>
);