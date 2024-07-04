import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: 100px;
    margin: 5px;
    padding: 10px;
    background-color: ${({ theme }) => theme.navigation.primary};
    color: ${({ theme }) => theme.navigation.textPrimary};
`;

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 10px;
    position: absolute;
`;

export const Home = styled.img`
    width: 75px;
    height: 75px;
    
    &:hover {
        cursor: pointer;
        scale: 110%;
        transition: 0.3s;
    }
`;

export const NavLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
`;

export const NavLink = styled.img`
    width: 100px;
    height: 100px;
    margin: 10px;

    &:hover {
        cursor: pointer;
        scale: 110%;
        transition: 0.3s;
    }

    &:active {
        border: solid 5px;
    }
`;