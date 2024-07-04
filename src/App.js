import { GlobalStyle } from "./common/GlobalStyle";
import Theme from "./common/theme";
import Header from "./common/Header";
import Navigation from "./common/Navigation";

export const App = () => {
  return (
    <>
    <Theme>
        <GlobalStyle />
          <Navigation/>
          <Header />
          
      </Theme>
    </>
  );
}

export default App;