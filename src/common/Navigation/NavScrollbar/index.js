import { 
    StyledLink, 
    StyledList, 
    Wrapper, 
} from "./styled";
import { useLocation } from "react-router-dom";
import useThemeColor from "../../../features/useThemeColor/useThemeColor";
import Dropdown from "./DropdownList";

const NavScrollbar = () => {
    const location = useLocation();
    const themeColor = useThemeColor();

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" })
    };

    const sections = {
        "/JavaScript/JavaScriptBasics": 
        [
            { id: "1", name: "Where to write" },
            { id: "2", name: "JS Output" },
            { id: "3", name: "JS Statements" },
            { id: "4", name: "JS Syntax" },
            { id: "5", name: "JS Variables" },
            { id: "6", name: "JS Comments" },
            { id: "7", name: "JS Operators" },
            { id: "8", name: "JS Data Types" },
            { id: "9", name: "JS Functions" },
            { id: "10", name: "JS Events" },
        ],
        "/JavaScript/Page2": 
        [
            { id: "1", name: "JS Strings" },
            { id: "2", name: "JS Number" },
            { id: "3", name: "JS Arrays" },
        ],
    };

    const currentPath = location.pathname;
    const currentSections = sections[currentPath] || [];


    //add getThemeColor ?
    return (
    <Wrapper $getThemeColor={themeColor}>
        <StyledList>
            {location.pathname.startsWith("/CSS") && (
                <>

                </>
            )}
    
            {location.pathname.startsWith("/JavaScript") && (
                <>
                    <StyledLink to="/JavaScript/JavaScriptBasics" $getThemeColor={themeColor}>
                        JavaScript Basics
                    </StyledLink>
                    {currentPath === "/JavaScript/JavaScriptBasics" && (
                        <Dropdown sections={currentSections} scrollToSection={scrollToSection} />
                    )}

                    <StyledLink to="/JavaScript/Page2" $getThemeColor={themeColor}>
                       Js More On Data Types 
                    </StyledLink>
                    {currentPath === "/JavaScript/Page2" && (
                        <Dropdown sections={currentSections} scrollToSection={scrollToSection} />
                    )}
                </>
            )}
        </StyledList>
    </Wrapper>
);
};

export default NavScrollbar;