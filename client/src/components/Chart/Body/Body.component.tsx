import { Badge, IBadgeProps } from "../../Badge/Badge.component";
import clsx from "clsx";
import { DataType } from "../../../pages/ChartGenerator/ChartGenerator.interface";
import { IChartProps } from "../Chart.interface";
import { Palette } from "node-vibrant/lib/color";
import React from "react";
import styles from "./Body.module.scss";

const getBadgeOverlap = (type?: DataType): "circle" | "rectangle" =>
  type === DataType.ARTIST ? "circle" : "rectangle";

const getTheme = (palette?: Palette): React.CSSProperties => ({
  background: palette?.Muted?.getHex(),
  color: palette?.Muted?.getTitleTextColor(),
});

const getBadgeTheme = (palette?: Palette): Partial<IBadgeProps> => ({
  backgroundColor: palette?.DarkMuted?.getHex(),
  textColor: palette?.DarkMuted?.getTitleTextColor(),
});

const getImageClass = (type?: DataType): string =>
  clsx(styles.image, type === DataType.ARTIST && styles.round);

const contentClass = clsx(styles.section, "text-center");

const textClass = clsx("body-1", "text-truncate", styles.text);
const titleClass = clsx(textClass, "font-weight-medium");

export const Body = ({ palette, contents }: IChartProps): JSX.Element => (
  <div className={styles.root} style={getTheme(palette)} id="body">
    {contents?.map(content => (
      <div className={contentClass} key={content.name} data-cy="section">
        <Badge
          {...{
            ...getBadgeTheme(palette),
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
