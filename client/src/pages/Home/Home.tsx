import { Box, Typography } from "@material-ui/core";
import React from "react";

export const HomePage = (): JSX.Element => {
  return (
    <Box
      fontWeight="fontWeightLight"
      fontSize="h6.fontSize"
      textAlign="center"
      component="h2"
    >
      <Typography variant="h4" align="center" component="h1">
        TopLast
      </Typography>
      A Last.fm chart generator
    </Box>
  );
};
