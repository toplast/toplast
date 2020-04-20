import React from "react";
import styles from "./Footer.module.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className="font-weight-light body-1 text-center">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by Castilhos and Munhoz
      </div>
    </footer>
  );
};
