import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";

export const useThemeColor = () => {
    const location = useLocation();
    const theme = useTheme();

    switch (location.pathname) {
        case "/Home":
            return {
                primary: theme.homePage.primary,
                header: theme.homePage.header,
            }
        case "/CSS":
            return {
                primary: theme.cssPage.primary,
                header: theme.cssPage.header,
            }
        case "/JavaScript":
            return {
                primary: theme.jsPage.primary,
                header: theme.jsPage.header,
            }
        default:
            return {
                primary: theme.homePage.primary,
                header: theme.homePage.header,
            }
    }
};

export default useThemeColor;