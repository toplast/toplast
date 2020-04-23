import {
  Button,
  CircularProgress,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import React from "react";

interface IButtonProps {
  loading: boolean;
  fullWidth: boolean;
  children: string;
  onClick(): void;
}

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      position: "relative",
    },
    buttonProgress: {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  }),
);

export const ButtonComponent = ({
  loading,
  fullWidth,
  children,
  onClick,
}: IButtonProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button
        {...{
          onClick,
          fullWidth,
          color: "primary",
          variant: "contained",
          disabled: loading,
        }}
      >
        {children}
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};
