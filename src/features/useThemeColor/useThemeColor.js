import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";

export const useThemeColor = () => {
    const location = useLocation();
    const theme = useTheme();

    if (location.pathname.startsWith("/Home")) {
        return {
            primary: theme.homePage.primary,
            header: theme.homePage.header,
        };
    } else if (location.pathname.startsWith("/CSS")) {
        return {
            primary: theme.cssPage.primary,
            header: theme.cssPage.header,
        };
    } else if (location.pathname.startsWith("/JavaScript")) {
        return {
            primary: theme.jsPage.primary,
            secondary: theme.jsPage.secondary,
            navPrimary: theme.jsPage.navPrimary,
            navSecondary: theme.jsPage.navSecondary,
            header: theme.jsPage.header,
        };
    } else {
        return {
            primary: theme.homePage.primary,
            header: theme.homePage.header,
        };
    }
};

export default useThemeColor;