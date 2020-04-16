import React from "react";
import styles from "./Badge.module.scss";

interface IBadgeProps {
  overlap?: "rectangle" | "circle";
  badgeContent?: React.ReactNode;
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

export const Badge = ({
  badgeContent,
  children,
  backgroundColor,
  textColor,
  overlap,
}: IBadgeProps): JSX.Element => {
  return (
    <span className={styles.root}>
      {children}
      <span
        id="badgeLabel"
        className={`${styles.badge} subtitle-2 ${
          overlap === "circle" ? styles.circle : styles.rectangle
        }`}
        style={{ backgroundColor, color: textColor }}
      >
        {badgeContent}
      </span>
    </span>
  );
};
