import clsx from "clsx";
import React from "react";
import styles from "./Header.module.scss";
import { useHistory } from "react-router-dom";

export const Header = (): JSX.Element => {
  const history = useHistory();

  const titleClass = clsx("headline-6", "font-weight-medium", styles.title);

  return (
    <header className={styles.header}>
      <div className={styles.toolbar}>
        <h6 className={titleClass} onClick={(): void => history.push("/")}>
          TopLast
        </h6>
      </div>
    </header>
  );
};
