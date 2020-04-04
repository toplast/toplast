import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AlbumProvider } from "./contexts/AlbumContext";
import { ArtistProvider } from "./contexts/ArtistContext";
import { ChartGenerator } from "./pages/ChartGenerator/ChartGenerator";
import { ChartProvider } from "./contexts/ChartContext";
import { HomePage } from "./pages/Home/Home";
import { Main } from "./components/Main";
import React from "react";
import { TrackProvider } from "./contexts/TrackContext";

const MainWrapper: React.FC = () => {
  return (
    <Main>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Main>
  );
};

export const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#d51007",
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ChartProvider>
      <AlbumProvider>
        <ArtistProvider>
          <TrackProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />

              <Router>
                <Switch>
                  <Route path="/generate" component={ChartGenerator} />
                  <Route path="/" component={MainWrapper} />
                </Switch>
              </Router>
            </ThemeProvider>
          </TrackProvider>
        </ArtistProvider>
      </AlbumProvider>
    </ChartProvider>
  );
};
