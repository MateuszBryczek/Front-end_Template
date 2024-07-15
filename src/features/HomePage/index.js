import { Header } from "../../common/Header";
import useThemeColor from "../useThemeColor/useThemeColor";

const HomePage = () => {
    const themeColor = useThemeColor();
    
    return (
    <>
        <Header $getThemeColor={ themeColor }>Front-End_Template</Header>
    </>
);
};

export default HomePage;