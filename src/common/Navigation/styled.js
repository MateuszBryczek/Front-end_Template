import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../images/home_icon.svg"

export const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    max-width: 100%;
    height: 100px;
    margin: 5px;
    margin-bottom: 0px;
    padding: 10px;
    background-color: ${({ $getThemeColor }) => $getThemeColor};
    color: ${({ theme }) => theme.navigation.textSecoundary};
    //box-shadow: 0px 10px 24px 0px ;
    transition: 1s;
    position: sticky;
    top: 5px;
`;

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 10px;
    position: absolute;
`;

export const Home = styled(HomeIcon)`
    width: 75px;
    height: 75px;
    color: ${({ theme }) => theme.navigation.textSecondary};
    display: flex;
    justify-content: center;
    
    &:hover {
        cursor: pointer;
        scale: 110%;
        transition: 1s;
        color: ${({ theme }) => theme.navigation.textPrimary};
    }
`;

export const StyledHomeNavLink = styled(NavLink)`
    &.active ${ Home } {
        scale: 110%;
        transition: 1s;
        color: ${({ theme }) => theme.navigation.textPrimary};
    }
`;

export const NavLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
`;

export const StyledIcon = styled.img`
    width: 100px;
    height: 100px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        border: solid 5px;
        border-color: ${({ theme }) => theme.colors.background};
        scale: 110%;
    }
`;

export const StyledNavLink = styled(NavLink)`
    &.active ${StyledIcon} {
        border: solid 5px;
        border-color: ${({ theme }) => theme.navigation.textPrimary};
        scale: 110%;
        transition: 1s;
    }
`;