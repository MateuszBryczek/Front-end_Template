import { Header } from "../../common/Header";
import { Wrapper, } from "../../common/Section";
import NavScrollbar from "../../common/Navigation/NavScrollbar";
import useThemeColor from "../useThemeColor/useThemeColor";
import { Outlet } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Page1 from "./Pages/Page1/JavaScriptBasics";
import Page2 from "./Pages/Page2/JavaScriptMoreOnDataTypes";

const JsPage = () => {
    const themeColor = useThemeColor();

    return (
    <>
    <Wrapper>
        <NavScrollbar/>
        <Header $getThemeColor={ themeColor }>JavaScript</Header>
            <Routes>
                <Route index element={<Navigate to="JavaScriptBasics" replace />} />
                <Route path="JavaScriptBasics" element={<Page1 />} />
                <Route path="JavaScriptMoreOnDataTypes" element={<Page2 />} />
            </Routes>
            <Outlet />
    </Wrapper>
    </>
);
};

export default JsPage;