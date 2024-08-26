import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { BeanHeader } from "@/components/Header";
import { Routes } from "@/routes";

import { Client, HydrationProvider } from "react-hydration-provider";
import { BeanFooter } from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colors: {
            brand: ["#d9b0ff", "#9a79b8", "#38006c", "#1a0d26"],
          },
          primaryColor: "brand",
          colorScheme,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <HydrationProvider>
          <div dir="ltr">
            <Client>
              <BeanHeader links={Routes} />
              <Component {...pageProps} />
              <Notifications />
            </Client>
            <BeanFooter links={Routes} />
          </div>
        </HydrationProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
