import { 
    Wrapper, 
    NavLink, 
    NavLinkWrapper,
    HomeWrapper,
    Home,
} from "./styled";
import homeIcon from "../../images/home_icon.svg"
import cssIcon from "../../images/css_icon.svg"
import jsIcon from "../../images/js_icon.svg"

const Navigation = () => (
    <Wrapper>
        <HomeWrapper>
            <Home src={homeIcon} alt="HOME" />
        </HomeWrapper>
        <NavLinkWrapper>
            <NavLink src={cssIcon} alt="CSS" />
            <NavLink src={jsIcon} alt="JS" />
        </NavLinkWrapper>
    </Wrapper>
    
);

export default Navigation;