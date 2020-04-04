import React from "react";
import styles from "./Header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.toolbar}>
        <h6 className={`${styles.title} headline-6 font-weight-medium`}>
          TopLast
        </h6>
      </div>
    </header>
  );
};
