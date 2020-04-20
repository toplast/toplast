import { Badge } from "../../Badge/Badge.component";
import clsx from "clsx";
import { DataType } from "../../../pages/ChartGenerator/ChartGenerator.interface";
import { IChartProps } from "../Chart.interface";
import React from "react";
import styles from "./Body.module.scss";

const getBadgeOverlap = (type?: DataType): "circle" | "rectangle" =>
  type === DataType.ARTIST ? "circle" : "rectangle";

const getImageClass = (type?: DataType): string =>
  clsx(styles.image, type === DataType.ARTIST && styles.round);

const contentClass = clsx(styles.section, "text-center");

const textClass = clsx("body-1", "text-truncate", styles.text);
const titleClass = clsx(textClass, "font-weight-medium");

export const Body = ({ palette, contents }: IChartProps): JSX.Element => (
  <div
    id="body"
    className={styles.root}
    style={{
      background: palette?.Muted?.getHex(),
      color: palette?.Muted?.getTitleTextColor(),
    }}
  >
    {contents?.map(content => (
      <div className={contentClass} key={content.name} data-cy="section">
        <Badge
          {...{
            backgroundColor: palette?.DarkMuted?.getHex(),
            textColor: palette?.DarkMuted?.getTitleTextColor(),
            badgeContent: content.playcount,
            overlap: getBadgeOverlap(content.type),
          }}
        >
          <img
            className={getImageClass(content.type)}
            src={content.image}
            alt={content.name}
          />
        </Badge>

        <div className={styles.content}>
          <h1 className={titleClass}>{content.name}</h1>
          {content.artist && <h2 className={textClass}>{content.artist}</h2>}
        </div>
      </div>
    ))}
  </div>
);
