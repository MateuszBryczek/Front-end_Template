import { ThemeProvider } from "styled-components";

const colorNames = {
  White: "#FFFFFF",
  Whisper: "#F5F5FA", //light grey
  Woodsmoke: "#0e1111", //black
};

export const GlobalTheme = {    //add more resolutions in style
    breakpoints: {
      smallDevices: 576,
      mediumDevices: 768,
      largeDevices: 1054,
      smallDesktop: 1180,
      mediumDesktop: 1400,
    },

colors: {
  background: colorNames.Whisper,
  primary: colorNames.White,
  textPrimary: colorNames.Woodsmoke,
},
navigation: {
  primary: colorNames.Woodsmoke,
  textPrimary: colorNames.White
},
};

export default function Theme({ children }) {
  return <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>;
}