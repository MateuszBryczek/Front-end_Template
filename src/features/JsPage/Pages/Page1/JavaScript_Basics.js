import { ArticleWrapper } from "../../../../common/Section";
import { Where_to_write } from "./Articles/Where_to_write"
import { JS_Output } from "./Articles/JS_Output";
import { JS_Statements } from "./Articles/JS_Statements";
import { JS_Syntax } from "./Articles/JS_Syntax";
import { JS_Variables } from "./Articles/JS_Variables";

export const JavaScript_Basics = () => (
    <>
    <ArticleWrapper>
        <Where_to_write />
        <JS_Output />
        <JS_Statements />
        <JS_Syntax />
        <JS_Variables />
    </ArticleWrapper>
    </>
);

export default JavaScript_Basics;