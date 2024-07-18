import { StyledLink, StyledList, Wrapper, StyledNavLink } from "./styled";
import { useLocation } from "react-router-dom";
import useThemeColor from "../../../features/useThemeColor/useThemeColor";

const NavScrollbar = () => {
    const location = useLocation();
    const themeColor = useThemeColor();

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" })
    }
    //add getThemeColor ?
    return (
    <Wrapper $getThemeColor={themeColor}>
        <StyledList>
            {location.pathname.startsWith("/CSS") && (
                <>
                    <StyledLink onClick={() => scrollToSection("1")}></StyledLink>
                    <StyledLink onClick={() => scrollToSection("2")}>2</StyledLink>
                    <StyledLink onClick={() => scrollToSection("3")}>3</StyledLink>
                </>
            )}
    
            {location.pathname.startsWith("/JavaScript") && (
                <>
                    <StyledLink to="/JavaScript/HelloWorld">"Hello World!"</StyledLink>
                </>
            )}
        </StyledList>
    </Wrapper>
);
};

export default NavScrollbar;