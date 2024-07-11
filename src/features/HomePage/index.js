import { Header } from "../../common/Header";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { getThemeColor } from "../getThemeColor/getThemeColor";

const HomePage = () => {
    const location = useLocation();
    const theme = useTheme();
    
    return (
    <>
        <Header $getThemeColor={getThemeColor(location.pathname, theme)}>Front-End_Template</Header>
    </>
);
};

export default HomePage;