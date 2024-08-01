import { ArticleWrapper } from "../../../../common/Section";
import { WhereToWrite } from "./Articles/WhereToWrite"
import { JavaScriptOutput } from "./Articles/JavaScriptOutput";
import { JavaScriptStatements } from "./Articles/JavaScriptStatements";
import { JavaScriptSyntax } from "./Articles/JavaScriptSyntax";
import { JavaScriptVariables } from "./Articles/JavaScriptVariables";

export const JavaScript_Basics = () => (
    <>
    <ArticleWrapper>
        <WhereToWrite />
        <JavaScriptOutput />
        <JavaScriptStatements />
        <JavaScriptSyntax />
        <JavaScriptVariables />
    </ArticleWrapper>
    </>
);

export default JavaScript_Basics;