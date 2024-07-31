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
            { id: "3", name: "3" }
        ],
        "/JavaScript/Page2": 
        [
            { id: "1", name: "1" },
            { id: "2", name: "2" }
        ],
        "/JavaScript/Page3": 
        [
            { id: "1", name: "1" },
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
                    <StyledLink to="/JavaScript/JavaScriptBasics">
                        JavaScript Basics
                    </StyledLink>
                    {currentPath === "/JavaScript/JavaScriptBasics" && (
                        <Dropdown sections={currentSections} scrollToSection={scrollToSection} />
                    )}

                    <StyledLink to="/JavaScript/Page2">
                        Page2
                    </StyledLink>
                    {currentPath === "/JavaScript/Page2" && (
                        <Dropdown sections={currentSections} scrollToSection={scrollToSection} />
                    )}

                    <StyledLink to="/JavaScript/Page3">
                        Page3
                    </StyledLink>
                    {currentPath === "/JavaScript/Page3" && (
                        <Dropdown sections={currentSections} scrollToSection={scrollToSection} />
                    )}
                </>
            )}
        </StyledList>
    </Wrapper>
);
};

export default NavScrollbar;