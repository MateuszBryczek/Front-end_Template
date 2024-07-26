import { ThemeProvider } from "styled-components";

const colorNames = {
  Whisper: "#F5F5FA", //light grey
  Silver: "#C8D0D0", //grey
  Woodsmoke: "#0e1111", //black
  RipeLemon: "#f5de19", // JS icon - yellow
  CuriusBlue: "#33a9dc", //CSS icon - blue
  Studio: "#5f43b2",

  //CodeSpace colors
  Black: "#0e1111",
  White: "#FFFFFF",
  Red: "#FF0000",
  Green: "#228B22",
  Blue: "#38ACEC",
  Purple: "#C87DF7",
  Orange: "#CD5804",
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
},
section: {
  background: colorNames.Whisper,
  textPrimary: colorNames.Woodsmoke,
  border: colorNames.Silver
},
highlighted: {
  background: colorNames.Woodsmoke,
  textPrimary: colorNames.White,
},
hint: {
  background: colorNames.Silver,
},
CodeSpace: {
  background: colorNames.Woodsmoke,
  default: colorNames.White,
  variables: colorNames.Blue,
  functions: colorNames.Purple,
  conditionals: colorNames.Purple,
  symbols: colorNames.Green,
  strings: colorNames.Orange,
},
};

export default function Theme({ children }) {
  return <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>;
}