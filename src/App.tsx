import { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";

import router from "./routes/router";
import store from "./store";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Suspense fallback={<>로딩중</>}>
            <RouterProvider router={router} />
          </Suspense>
        </Provider>
      </ThemeProvider>
    </>
  );
}
