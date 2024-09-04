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

const stringColumns = ['Name', 'Usage', 'Output'];
const stringData = [
    {Name: "String length", Usage: "text.length;", Output: "The length of a string"},
    {Name: "String charAt()", Usage: "text.charAt(x);", Output: "The character at a specified index"},
    {Name: "String charCodeAt()", Usage: "text.charCodeAt(x);", Output: "The code of the character at a specified index"},
    {Name: "String at()", Usage: "text.at(x);", Output: "The x letter of index"},
    {Name: "String []", Usage: "text[x]", Output: "The x letter of index"},
    {Name: "String slice()", Usage: "text.slice(x, y);", Output: "A part of a string from x to y"},
    {Name: "String substring()", Usage: "text.substring(x, y);", Output: "A part of a string from x to y"},
    {Name: "String substr()", Usage: "text.substr(x, y);", Output: "A part of a string from x to y"},
    {Name: "String toUpperCase()", Usage: "text.toUpperCase();", Output: "A string converted to upper case"},
    {Name: "String toLowerCase()", Usage: "text.toLowerCase();", Output: "A string converted to upper case"},
    {Name: "String concat()", Usage: "text.concat(text1, text2);", Output: "Joins multiple strings"},
    {Name: "String trim()", Usage: "text.trim();", Output: "Removes whitespace from both sides of a string"},
    {Name: "String trimStart()", Usage: "text.trimStart();", Output: "Removes whitespace from the start of a string"},
    {Name: "String trimEnd()", Usage: "text.trimEnd();", Output: "Removes whitespace from the end of a string"},
    {Name: "String padStart()", Usage: "text.padStart(x, y)", Output: "Pad a string with y from the start, until it reaches the length x"},
    {Name: "String padEnd()", Usage: "text.padEnd(x, y)", Output: "Pad a string with y from the end, until it reaches the length x"},
    {Name: "String repeat()", Usage: "text.repeat(x)", Output: "A string with a number of x copies of a string"},
    {Name: "String replace()", Usage: "text.replace(text1, text2)", Output: "Replaces a specified value with another value in a string"},
    {Name: "String replaceAll()", Usage: "text.ReplaceAll(text1, text2)", Output: "Replaces all specified values with another values in a string"},
    {Name: "String split()", Usage: 'text.split(" ")', Output: "Splits a string into an array of substrings"},
];

export const JavaScriptStrings = () => (
<>
    <ArticleHeader id ="1">JavaScript Strings</ArticleHeader>
    <Article>
<SectionHeader>Concatenating Strings</SectionHeader>
<Section>
To concatenate or add strings, use the <b>addition</b> <Highlighted>+</Highlighted> operator.
<CodeSpace>
{`
const str1 = "Hello";
const str2 = "World!";

const sentence = str1 + " " + str2;
`}
</CodeSpace>
Or <b>addition assignment</b> <Highlighted>+=</Highlighted> operator.
<CodeSpace>
{`
const str = "Hello";

str += " World";
`}
</CodeSpace>
You can add as many strings as you want!
<Hint>
Even single space between <Highlighted>" "</Highlighted> is considered a string.
</Hint>
</Section>

<SectionHeader>Escaping Characters</SectionHeader>
<Section>
To <b>escape characters</b>, use a <b>backslash</b> <Highlighted>\</Highlighted> right <b>before</b> the character.<br/>
It helps us make sure that our string are recognized as pieces of text, not a part of the code.
<CodeSpace>
{`
const str1 = "We are the so-called \\"Vikings\\" from the north.";
const str2 = 'It\\'s alright.';
const str3 = "The character \\\\ is called backslash.";
`}
</CodeSpace>
<Hint>
<b>Escaping characters</b> will avoid many common errors in writing strings.
</Hint>
</Section>

<SectionHeader>JavaScript String Methods</SectionHeader>
<Section>
<Table columns={stringColumns} data={stringData} />
</Section>
    </Article>
</>
);