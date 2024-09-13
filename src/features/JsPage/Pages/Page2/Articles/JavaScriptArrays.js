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

const arrayColumn = ["Name", "Usage", "Output"];
const arrayData = [
    {Name: "Array length", Usage: "", Output: ""},
    {Name: "Array toString()", Usage: "", Output: ""},
    {Name: "Array at()", Usage: "", Output: ""},
    {Name: "Array join()", Usage: "", Output: ""},
    {Name: "Array pop()", Usage: "", Output: ""},
    {Name: "Array push()", Usage: "", Output: ""},
    {Name: "Array shift()", Usage: "", Output: ""},
    {Name: "Array unshift()", Usage: "", Output: ""},
    {Name: "Array delete()", Usage: "", Output: ""},
    {Name: "Array concat()", Usage: "", Output: ""},
    {Name: "Array copyWithin()", Usage: "", Output: ""},
    {Name: "Array flat()", Usage: "", Output: ""},
    {Name: "Array splice()", Usage: "", Output: ""},
    {Name: "Array toSpliced()", Usage: "", Output: ""},
    {Name: "Array slice()", Usage: "", Output: ""},
];

export const JavaScriptArrays = () => (
<>
    <ArticleHeader id="3">JavaScript Arrays</ArticleHeader>
    <Article>
<SectionHeader>JavaScript Arrays</SectionHeader>
<Section>
A JavaScript <b>array</b> is a collection of values. Each value is written with <b>squere brackets</b> <Highlighted>[...]</Highlighted> and separated with a <b>comma</b> <Highlighted>,</Highlighted> .<br />
The data type of arrays is <b>object</b>.
<CodeSpace>
{`
const fruits = ["Apple", "Bananas", "Oranges"];
`}
</CodeSpace>
</Section>

<SectionHeader>Accessing Array Elements</SectionHeader>
<Section>You access an array element by referring to the <b>index number</b>:
<CodeSpace>
{`
const fruits = ["Apple", "Bananas", "Oranges"];
let fruit = fruits[0];
`}
</CodeSpace>
<Hint>
Array indexes start with 0.
</Hint>
</Section>

<SectionHeader>Changing an Array Element</SectionHeader>
<Section>
This example changes the value of the first element in fruits:
<CodeSpace>
{`
const fruits = ["Apple", "Bananas", "Oranges"];
fruits[0] = "Lemon";
`}
</CodeSpace>
</Section>

<SectionHeader>JavaScript Array Methods</SectionHeader>
<Section>
<Table columns={arrayColumn} data={arrayData}/>
</Section>
    </Article>
</>
);