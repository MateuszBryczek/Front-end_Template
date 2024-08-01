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
        ],
        "/JavaScript/Page2": 
        [
            { id: "1", name: "1" },
            { id: "2", name: "2" }
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
                        Page2
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