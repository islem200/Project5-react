import React from "react";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import { useMode, ColorModeContext } from "./components/Theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Hero from "./components/hero/Hero";

import Main from "./components/main/main";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/scroll/ScrollTop";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />


        <Header1 />
        <Header2 />
        <Header3 />

        <Box bgcolor={theme.palette.bg.main}>
          <Hero />
          <Main />
          <Footer />
        </Box>
        <ScrollTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
