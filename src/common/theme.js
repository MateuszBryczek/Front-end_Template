import { ThemeProvider } from "styled-components";

const colorNames = {
  Whisper: "#F5F5FA", //light grey
  Silver: "#C8D0D0", //grey
  Woodsmoke: "#0e1111", //black
  Studio: "#5f43b2", //purple

  //CSS blue by shades
  CuriusBlue: "#33a9dc", 

  // JS yellow by shades
  RipeLemon: "#f5de19", 
  Portica: "#F8E85C", 
  SweetCorn: "#FAEF89",
  Drover: "#FCF5B8",
  
  //CodeSpace colors
  Black: "#0e1111",
  White: "#FFFFFF",
  Red: "#FF0000",
  Green: "#228B22",
  Blue: "#38ACEC",
  LightBlue: "#38ddec",
  Purple: "#CE8BF8",
  Orange: "#D16619",
  Yellow: "#E6C13E",
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
  secondary: colorNames.Portica,
  navPrimary: colorNames.SweetCorn,
  navSecondary: colorNames.Drover,
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
table: {
border: colorNames.Silver,
primary: colorNames.Whisper,
secondary: colorNames.Silver,
},
CodeSpace: {
  background: colorNames.Woodsmoke,
  default: colorNames.White,
  Blue: colorNames.Blue,
  LightBlue: colorNames.LightBlue,
  Purple: colorNames.Purple,
  Green: colorNames.Green,
  Orange: colorNames.Orange,
  Yellow: colorNames.Yellow,
  Grey: colorNames.Grey,
},
};

export default function Theme({ children }) {
  return <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>;
}