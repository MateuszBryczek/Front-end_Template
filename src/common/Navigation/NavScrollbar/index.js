import { StyledLink, StyledList, Wrapper } from "./styled";
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
            {location.pathname === "/CSS" && (
                <>
                    <StyledLink onClick={() => scrollToSection("1")}></StyledLink>
                    <StyledLink onClick={() => scrollToSection("2")}>2</StyledLink>
                    <StyledLink onClick={() => scrollToSection("3")}>3</StyledLink>
                </>
            )}
            {location.pathname === "/JavaScript" && (
                <>
                    <StyledLink onClick={() => scrollToSection("1")}>1</StyledLink>
                    <StyledLink onClick={() => scrollToSection("2")}>2</StyledLink>
                    <StyledLink onClick={() => scrollToSection("3")}>3</StyledLink>
                    <StyledLink onClick={() => scrollToSection("4")}>4</StyledLink>
                    <StyledLink onClick={() => scrollToSection("1")}>1</StyledLink>
                    <StyledLink onClick={() => scrollToSection("2")}>2</StyledLink>
                    <StyledLink onClick={() => scrollToSection("3")}>3</StyledLink>
                    <StyledLink onClick={() => scrollToSection("4")}>4</StyledLink>
                    <StyledLink onClick={() => scrollToSection("1")}>1</StyledLink>
                    <StyledLink onClick={() => scrollToSection("2")}>2</StyledLink>
                    <StyledLink onClick={() => scrollToSection("3")}>3</StyledLink>
                    <StyledLink onClick={() => scrollToSection("4")}>4</StyledLink>
                </>
            )}
        </StyledList>
    </Wrapper>
);
};

export default NavScrollbar;