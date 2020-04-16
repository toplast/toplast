import clsx from "clsx";
import { getSectionNameByDataType } from "../Chart.services";
import { IChartProps } from "../Chart.interface";
import React from "react";
import styles from "./Header.module.scss";

const commonClass = clsx("text-truncate", styles.text);
const titleClass = clsx("headline-3", commonClass);
const subtitleClass = clsx("headline-4", "font-weight-light", commonClass);
const textClassName = clsx("headline-5", commonClass);

export const Header = ({ palette, content }: IChartProps): JSX.Element => (
  <header
    className={styles.root}
    style={{
      background: palette?.DarkMuted?.getHex(),
      color: palette?.DarkMuted?.getTitleTextColor(),
    }}
  >
    <div className={styles.background}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${content?.image})`,
        }}
      />
      <div
        className={styles.overlay}
        style={{
          background: `linear-gradient(0.25turn, rgba(${palette?.DarkMuted?.getRgb().join(
            ", ",
          )}, 1), rgba(${palette?.DarkMuted?.getRgb().join(", ")}, 0))`,
        }}
      />
    </div>

    <div className={styles.content}>
      <h2 className={textClassName}>
        {getSectionNameByDataType(content?.type)}
      </h2>

      <h1 className={titleClass}>{content?.name}</h1>

      {content?.artist && <h2 className={subtitleClass}>{content?.artist}</h2>}

      <h2 className={textClassName}>{content?.playcount} scrobbles</h2>
    </div>
  </header>
);
