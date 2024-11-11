import useThemeColor from "../../features/useThemeColor/useThemeColor";
import { 
    Wrapper,
    StyledHomeNavLink,
    StyledNavLink,
    StyledIcon, 
    NavLinkWrapper,
    HomeWrapper,
    Home,
} from "./styled";
import homeIcon from "../../images/home_icon.svg";
import cssIcon from "../../images/css_icon.svg";
import jsIcon from "../../images/js_icon.svg";

const Navigation = () => {
    const themeColor = useThemeColor();

    return (
    <Wrapper $getThemeColor={themeColor}>
        <HomeWrapper>
            <StyledHomeNavLink to="/Home">
                <Home src={homeIcon} alt="HOME" />
            </StyledHomeNavLink>
        </HomeWrapper>
        <NavLinkWrapper>
            <StyledNavLink to="/CSS">
                <StyledIcon src={cssIcon} alt="CSS" />
            </StyledNavLink>
            <StyledNavLink to="JavaScript/">
                <StyledIcon src={jsIcon} alt="JS" />
            </StyledNavLink>
        </NavLinkWrapper>
    </Wrapper>
    );
};

export default Navigation;