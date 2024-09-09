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
    {Name: "Number toString()", Usage: "x.toString();", Output: "Returns x as a string"},
    {Name: "Namber toExponential(y)", Usage: "x.toExponential(y)'", Output: "Returns a string with x rounded with y number of decimal point"},
    {Name: "Number toFixed()", Usage: "x.toFixed(y)'", Output: "Returns a string with x with y number of decimal point"},
    {Name: "Number toPrecision()", Usage: "x.toPrecision(y);", Output: "Returns a string with x with y number length"},
    {Name: "Number valueOf()", Usage: "x.valueOf()'", Output: "Returns a x as a number"},
    {Name: "Number Number()", Usage: "Number(x);", Output: "Convert JavaScript variables to numbers"},
    {Name: "Number parseFloat()", Usage: "Number.parseFloat(x);", Output: "Parses a string and returns first number"},
    {Name: "Number parseInt()", Usage: "Number.parseInt(x);", Output: "Parses a string and returns a whole first number"},
    {Name: "Number isInteger()", Usage: "Number.isInteger(x);", Output: "Returns true if the argument is an integer"},
    {Name: "Number isSafeInteger()", Usage: "Number.parseInt(x);", Output: "Returns true if the argument is a safe integer"},
];
const javaScriptNumberPropertiesColumns = ["Name", "Usage", "Output"]
const javaScriptNumberPropertieData = [
    {Name: "EPSILON", Usage: "Number.EPSILON;", Output: "The difference between the smallest floating point number greater than 1 and 1"},
    {Name: "MAX_VALUE", Usage: "Number.MAX_VALUE;", Output: "The largest possible number in JavaScript"},
    {Name: "MIN_VALUE", Usage: "Number.MIN_VALUE;", Output: "The lowest possible number in JavaScript"},
    {Name: "MAX_SAFE_INTEGER", Usage: "Number.MAX_SAFE_INTEGER;", Output: "The maximum safe integer in JavaScript"},
    {Name: "MIN_SAFE_INTEGER", Usage: "Number.MIN_SAFE_INTEGER;", Output: "The minimum safe integer in JavaScript"},
    {Name: "POSITIVE_INFINITY", Usage: "Number.POSITIVE_INFINITY;", Output: "The infinity"},
    {Name: "NEGATIVE_INFINITY", Usage: "Number.NEGATIVE_INFINITY;", Output: "The -infinity"},
    {Name: "NaN", Usage: "Number.NaN;", Output: '"Not-a-Number" - not a legal number'},
];

export const JavaScriptNumber = () => (
<>
    <ArticleHeader id="2">JavaScript Number</ArticleHeader>
    <Article>
<SectionHeader>JavaScript Number Methods</SectionHeader>
<Section>
<Table columns={javaScriptNumberColumns} data={javaScriptNumberData}/>:
</Section>
<SectionHeader>JavaScript Number Properties</SectionHeader>
<Section>
<Table columns={javaScriptNumberPropertiesColumns} data={javaScriptNumberPropertieData}/>
</Section>

    </Article>
</>
);