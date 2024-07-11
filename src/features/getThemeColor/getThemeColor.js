

export const getThemeColor = (pathname, theme) => {
    switch (pathname) {
        case "/CSS":
            return theme.colors.cssColor;
        case "/JavaScript":
            return theme.colors.jsColor;
        default:
            return theme.colors.defaultColor;
    }
};