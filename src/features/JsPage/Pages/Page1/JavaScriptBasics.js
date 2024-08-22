import { ArticleWrapper } from "../../../../common/Section";
import { WhereToWrite } from "./Articles/WhereToWrite"
import { JavaScriptOutput } from "./Articles/JavaScriptOutput";
import { JavaScriptStatements } from "./Articles/JavaScriptStatements";
import { JavaScriptSyntax } from "./Articles/JavaScriptSyntax";
import { JavaScriptVariables } from "./Articles/JavaScriptVariables";
import { JavaScriptComments } from "./Articles/JavaScriptComments";
import { JavaScriptOperators } from "./Articles/JavaScriptOperators";
import { JavaScriptDataTypes } from "./Articles/JavaScriptDataTypes";
import { JavaScriptFunctions } from "./Articles/JavaScriptFunctions";

export const JavaScriptBasics = () => (
    <>
    <ArticleWrapper>
        <WhereToWrite />
        <JavaScriptOutput />
        <JavaScriptStatements />
        <JavaScriptSyntax />
        <JavaScriptVariables />
        <JavaScriptComments />
        <JavaScriptOperators />
        <JavaScriptDataTypes />
        <JavaScriptFunctions />
    </ArticleWrapper>
    </>
);

export default JavaScriptBasics;