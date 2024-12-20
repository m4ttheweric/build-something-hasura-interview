import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const queryClient = new QueryClient();

const theme = createTheme({
  /** Put your mantine theme override here */
  primaryColor: "yellow",
  defaultRadius: "xl",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>,
);
