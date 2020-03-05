import { Box } from "@material-ui/core";
import React from "react";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Box
        fontWeight="fontWeightRegular"
        fontSize="h4.fontSize"
        textAlign="center"
        component="h1"
        marginBottom={0}
      >
        TopLast
      </Box>
      <Box
        fontWeight="fontWeightLight"
        fontSize="h6.fontSize"
        textAlign="center"
        component="h2"
        marginTop={0}
      >
        A Last.fm chart generator
      </Box>
    </>
  );
};
