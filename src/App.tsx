import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";

import router from "./routes/router";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<>로딩중</>}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </>
  );
}
