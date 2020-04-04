import { Footer } from "./Footer/Footer.component";
import { Grid } from "@material-ui/core";
import { Header } from "./Header/Header.component";
import React from "react";

export const Main = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <React.Fragment>
      <Header />

      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>

      <Footer />
    </React.Fragment>
  );
};
