import clsx from "clsx";
import { DataType } from "../../../pages/ChartGenerator/ChartGenerator.interface";
import { IChartProps } from "../Chart.interface";
import React from "react";
import styles from "./Footer.module.scss";

const getSectionNameByDataType = (type?: DataType): string =>
  ({
    [DataType.ALBUM]: "Most listened album",
    [DataType.ARTIST]: "Most listened artist",
    [DataType.TRACK]: "Most listened track",
    [DataType.UNDEFINED]: "Most listened",
  }[type || DataType.UNDEFINED]);

const getImageClass = (type?: DataType): string =>
  clsx(styles.image, type === DataType.ARTIST && styles.round);

const textClass = clsx("text-truncate", styles.text);
const sectionNameClass = clsx(textClass, "body-1");
const titleClass = clsx(textClass, "font-weight-medium", "headline-5");
const subtitleClass = clsx(textClass, "headline-6");

export const Footer = ({ palette, contents }: IChartProps): JSX.Element => (
  <footer
    className={styles.root}
    style={{
      background: palette?.LightMuted?.getHex(),
      color: palette?.LightMuted?.getTitleTextColor(),
    }}
  >
    {contents?.map(content => (
      <div className={styles.section} key={content.name} data-cy="section">
        <div className={styles.image}>
          <img
            className={getImageClass(content.type)}
            src={content.image}
            alt={content.name}
          />
        </div>
        <div className={styles.content}>
          <h4 className={sectionNameClass}>
            {getSectionNameByDataType(content.type)}
          </h4>

          <h2 className={titleClass}>{content.name}</h2>

          {content?.artist && (
            <h3 className={subtitleClass}>{content.artist}</h3>
          )}
        </div>
      </div>
    ))}
  </footer>
);
