import { StyledLink, StyledList, Wrapper } from "./styled";
import { useLocation } from "react-router-dom";


const NavScrollbar = () => {
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" })
    }
    
    return (
    <Wrapper>
        <StyledList>
            {location.pathname === "/CSS" && (
                <>
                    <StyledLink onClick={() => scrollToSection("1")}>1</StyledLink>
                    <StyledLink onClick={() => scrollToSection("2")}>2</StyledLink>
                    <StyledLink onClick={() => scrollToSection("3")}>3</StyledLink>
                </>
            )}
            {location.pathname === "/JavaScript" && (
                <>
                    <StyledLink onClick={() => scrollToSection("1")}>1</StyledLink>
                    <StyledLink onClick={() => scrollToSection("2")}>2</StyledLink>
                    <StyledLink onClick={() => scrollToSection("3")}>3</StyledLink>
                </>
            )}
        </StyledList>
    </Wrapper>
);
};

export default NavScrollbar;