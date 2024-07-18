import { Header } from "../../common/Header";
import { 
    Wrapper, 
    SectionHeader, 
    Section, 
    SectionWrapper 
} from "../../common/Section";
import NavScrollbar from "../../common/Navigation/NavScrollbar";
import useThemeColor from "../useThemeColor/useThemeColor";
import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Page1 from "./Pages/Page1";

const JsPage = () => {
    const themeColor = useThemeColor();

    return (
    <>
    <Wrapper>
        <NavScrollbar/>
        <Header $getThemeColor={ themeColor }>JavaScript</Header>
            <Routes>
                <Route path="HelloWorld" element={<Page1 />} />
            </Routes>
            <Outlet />
    </Wrapper>
    </>
);
};

export default JsPage;