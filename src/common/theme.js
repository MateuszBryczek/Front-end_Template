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
  LightBlue: "#38ddec",
  Purple: "#C87DF7",
  Orange: "#CD5804",
  Grey: "#8D9292",
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
  Blue: colorNames.Blue,
  LightBlue: colorNames.LightBlue,
  Purple: colorNames.Purple,
  Green: colorNames.Green,
  Orange: colorNames.Orange,
  Grey: colorNames.Grey,
},
};

export default function Theme({ children }) {
  return <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>;
}