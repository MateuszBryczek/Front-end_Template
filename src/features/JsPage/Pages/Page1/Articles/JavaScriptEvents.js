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
For example, we can perform a task when a <b>a button is clicked</b>.
<CodeSpace>
{`
const 
`}
</CodeSpace>
</Section>
    </Article>
</>
);