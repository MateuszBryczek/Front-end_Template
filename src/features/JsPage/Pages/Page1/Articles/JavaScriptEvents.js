import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";
import Table from "../../../../../common/Tabele";

const commonEventsColumns = ['Event', 'Description'];
const commonEventsData = [
    {Event: "onchange", Description: "Event occurs when the value of an HTML element is changed"},
    {Event: "onclick", Description: "Event occurs when the user clicks on an HTML element"},
    {Event: "onmouseover", Description: "Event occurs when the mouse pointer enters an element"},
    {Event: "onmouseout", Description: " Event occurs when the mouse pointer moves out of an element"},
    {Event: "onkeydown", Description: "Event occurs when the user presses a key on the keyboard"},
    {Event: "onload", Description: "Event occurs when an object has been loaded"}
];


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

<SectionHeader>Common HTML Events</SectionHeader>
<Section>
<Table columns={commonEventsColumns} data={commonEventsData}/>
<b>Full Events List:</b> //add link later
</Section>
    </Article>
</>
);