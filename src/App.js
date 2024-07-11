import { GlobalStyle } from "./common/GlobalStyle";
import Theme from "./common/theme";
import Navigation from "./common/Navigation";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./features/HomePage";
import CssPage from "./features/CssPage";
import JsPage from "./features/JsPage"

export const App = () => {
  return (
    <>
    <Theme>
        <GlobalStyle />
          <Navigation/>
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/CSS" element={<CssPage />} />
            <Route path="/JavaScript" element={<JsPage />} />
            <Route path="*" element={<Navigate to="/Home" replace />} />
          </Routes>
      </Theme>
    </>
  );
}

export default App;