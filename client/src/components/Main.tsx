import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export const Main = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">TopLast</Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
