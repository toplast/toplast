import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { Main } from "./components/Main";
import React from "react";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Switch>
          {/* <Route path="/generate" component={ToDo} /> */}
          <Route path="/" component={MainWrapper} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
