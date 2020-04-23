import { makeStyles, Theme } from "@material-ui/core";

export const useChartFormStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(3),
  },
  select: {
    marginBottom: theme.spacing(3),
    minWidth: 120,
  },
}));
