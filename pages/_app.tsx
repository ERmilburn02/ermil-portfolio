import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import React from "react";

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const isEmbed = appProps.router.pathname.includes("/embed");
  const LayoutComponent = isEmbed ? React.Fragment : Layout;

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;
