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

import { CartProvider } from "@/context/cart";
import { Client, HydrationProvider } from "react-hydration-provider";
import { BeanFooter } from "@/components/Footer";
import { OrdersProvider } from "@/context/order";
import { ProductsProvider } from "@/context/product";
import { CategoriesProvider } from "@/context/categories";

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
              <CartProvider>
                <OrdersProvider>
                  <ProductsProvider>
                    <CategoriesProvider>
                      <BeanHeader links={Routes} />
                      <Component {...pageProps} />
                      <Notifications />
                    </CategoriesProvider>
                  </ProductsProvider>
                </OrdersProvider>
              </CartProvider>
            </Client>
            <BeanFooter links={Routes} />
          </div>
        </HydrationProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
