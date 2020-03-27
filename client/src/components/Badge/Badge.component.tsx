import "./Badge.style.scss";
import React from "react";

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
    <span className="root">
      {children}
      <span
        className={`badge ${overlap}`}
        style={{ backgroundColor, color: textColor }}
      >
        {badgeContent}
      </span>
    </span>
  );
};
