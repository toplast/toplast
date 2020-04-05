import { Footer } from "./Footer/Footer.component";
import { Header } from "./Header/Header.component";
import React from "react";

export const Main = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <React.Fragment>
      <Header />

      {children}

      <Footer />
    </React.Fragment>
  );
};
