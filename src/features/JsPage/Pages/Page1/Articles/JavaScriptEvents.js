import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";

export const JavaScriptEvents = () => (
<>
    <ArticleHeader id="10">JavaScript Events</ArticleHeader>
    <Article>
<SectionHeader>JavaScript Events</SectionHeader>
<Section>
<b>Events</b> are <b>actions</b> that happen in the system you are programing.<br/>
The system fires a signal when events happen, so we can do sometking when they do.
<p/>
For example, we can perform a task when <b>a button is clicked</b>.
<CodeSpace>
{`
const event = document.getElementById(event);

event.onclick = function() {
  alert("The button was clicked");
};
`}
</CodeSpace>
<Hint>The block of code that executes when an event fires is called <b>event handler</b> and <b>event listener</b>.</Hint>
You can also write event handlers inside an HTML element.
<CodeSpace>
{`
<button onclick='alert'("The button was clicked")>Click me</button>
`}
</CodeSpace>
</Section>

<SectionHeader>The addEventListener()</SectionHeader> Method
<Section>
The <Highlighted>addEventListener</Highlighted> method sets up a <b>function</b> that will be called when an event happens.
<CodeSpace>
{`
const event = document.getElementById("event");

event.addEventListener("click", function() {
  alert("The button was clicked");
});
`}
</CodeSpace>
</Section>
    </Article>
</>
);