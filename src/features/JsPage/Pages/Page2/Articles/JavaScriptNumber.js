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

const javaScriptNumberColumns = ["Name", "Usage", "Output"];
const javaScriptNumberData = [
    {Name: "Number toString()", Usage: "x.toString()", Output: "Returns x as a string"},
    {Name: "Namber toExponential(y)", Usage: "x.toExponential(y)", Output: "Returns a string with x rounded with y number of decimal point"},
    {Name: "Number toFixed()", Usage: "x.toFixed(y)", Output: "Returns a string with x with y number of decimal point"},
    {Name: "Number toPrecision()", Usage: "x.toPrecision(y)", Output: "Returns a string with x with y number length"},
    {Name: "Number valueOf()", Usage: "x.valueOf()", Output: "Returns a x as a number"},
];

export const JavaScriptNumber = () => (
<>
    <ArticleHeader id="2">JavaScript Number</ArticleHeader>
    <Article>
<SectionHeader>JavaScript Number Methods</SectionHeader>
<Section>
<Table columns={javaScriptNumberColumns} data={javaScriptNumberData}/>:
</Section>
    </Article>
</>
);