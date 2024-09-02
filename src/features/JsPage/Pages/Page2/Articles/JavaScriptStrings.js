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

const stringColumns = ['Name', 'Usage', 'Return'];
const stringData = [
    {Name: "String length", Usage: "text.length;", Return: "The length of a string"},
    {Name: "String charAt()", Usage: "text.charAt(x);", Return: "The character at a specified index"},
    {Name: "String charCodeAt()", Usage: "text.charCodeAt(x);", Return: "The code of the character at a specified index"},
    {Name: "String at()", Usage: "text.at(x);", Return: "The x letter of index"},
    {Name: "String []", Usage: "text[x]", Return: "The x letter of index"},
    {Name: "String slice()", Usage: "text.slice(x, y);", Return: "A part of a string from x to y"},
    {Name: "String substring()", Usage: "text.substring(x, y);", Return: "A part of a string from x to y"},
    {Name: "String substr()", Usage: "text.length", Return: "A part of a string from x to y"},
    {Name: "String toUpperCase()", Usage: "text.length", Return: "the length of a string"},
    {Name: "String toLowerCase()", Usage: "text.length", Return: "the length of a string"},
    {Name: "String trim()", Usage: "text.length", Return: "the length of a string"},
    {Name: "String trimStart()", Usage: "text.length", Return: "the length of a string"},
    {Name: "String trimEnd()", Usage: "text.length", Return: "the length of a string"},
    {Name: "String padStart()", Usage: "text.length", Return: "the length of a string"},
    {Name: "String padEnd()", Usage: "text.length", Return: "the length of a string"},
    {Name: "String repeat()", Usage: "text.length", Return: "the length of a string"},
    {Name: "String replace()", Usage: "text.length", Return: "the length of a string"},
    {Name: "String replaceAll()", Usage: "text.length", Return: "the length of a string"},
    {Name: "String split()", Usage: "text.length", Return: "the length of a string"},
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