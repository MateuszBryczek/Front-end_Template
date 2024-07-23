import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    ArticleWrapper,
    Section,
    Highlighted,
} from "../../../common/Section";
import CodeSpace from "../../CodeSpace/CodeSpace";

export const Page1 = () => (
    <>
    <ArticleWrapper>
        <ArticleHeader id="1">"Hello World!"</ArticleHeader>
        <Article>
            <SectionHeader>Writing JavaScript Code</SectionHeader>
<Section>
JavaScript codes should be writen inside the <Highlighted>&lt;script&gt;</Highlighted> element.

<CodeSpace>               
{`
1|<script>
2|    console.log("Hello World!");
3|<script>
`}
</CodeSpace>

But where you should put the <Highlighted>&lt;script&gt;</Highlighted> element? It can be either placen in the <Highlighted>&lt;head&gt;</Highlighted> , in the <Highlighted>&lt;body&gt;</Highlighted> or both.
</Section>
<SectionHeader>JavaScript in the &lt;head&gt;</SectionHeader>
<Section>
In this example <Highlighted>&lt;script&gt;</Highlighted> is placed inside <Highlighted>&lt;head&gt;</Highlighted> , before closing tag.

<CodeSpace>               
{`
1|
2|
3|
`}
</CodeSpace>

</Section>
<SectionHeader>JavaScript in the &lt;body&gt;</SectionHeader>
<Section>

</Section>
        </Article>

        <ArticleHeader id="2">2</ArticleHeader>
        <Article>
            <CodeSpace>
{`
console.log("Hello World! 2");
`}
            </CodeSpace>
        </Article>

        <ArticleHeader id="3">3</ArticleHeader>
        <Article>
            <CodeSpace>
{`
console.log("Hello World! 3");
`}
            </CodeSpace>
        </Article>
    </ArticleWrapper>
    </>
);

export default Page1;