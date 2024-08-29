import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";

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
const str1 = "We are the so-called \"Vikings\" from the north.";
const str2 = 'It\'s alright.';
const str3 = "The character \\ is called backslash.";
`}
</CodeSpace>
<Hint>
<b>Escaping characters</b> will avoid many common errors in writing strings.
</Hint>
</Section>
    </Article>
</>
);