import { ThemeProvider } from "styled-components";

const colorNames = {
  White: "#FFFFFF",
  Whisper: "#F5F5FA", //light grey
  Woodsmoke: "#0e1111", //black
  RipeLemon: "#f5de19", // JS icon - yellow
  CuriusBlue: "#33a9dc", //CSS icon - blue
  Studio: "#5f43b2",
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
  textPrimary: colorNames.Studio,
  textSecondary: colorNames.Woodsmoke,
},
homePage: {
  primary: colorNames.Woodsmoke,
  header: colorNames.Studio,
},
cssPage: {
  primary: colorNames.CuriusBlue,
  header: colorNames.CuriusBlue,
},
jsPage: {
  primary: colorNames.RipeLemon,
  header: colorNames.RipeLemon,
}
};

export default function Theme({ children }) {
  return <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>;
}