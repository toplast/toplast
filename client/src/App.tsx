import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ChartGenerator } from "./pages/ChartGenerator/ChartGenerator";
import { ChartProvider } from "./contexts/Chart/Chart.context";
import { Home } from "./pages/Home/Home";
import { Main } from "./components/Main";
import React from "react";

const MainWrapper: React.FC = () => {
  return (
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
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
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <Switch>
            <Route path="/generate" component={ChartGenerator} />
            <Route path="/" component={MainWrapper} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ChartProvider>
  );
};
