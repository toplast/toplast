import {
  DataType,
  section,
} from "../../../pages/ChartGenerator/ChartGenerator.interface";
import clsx from "clsx";
import { Palette } from "node-vibrant/lib/color";
import React from "react";
import styles from "./Header.module.scss";

interface IClassicChartHeaderProps {
  palette?: Palette;
  section?: section;
}

const getHeaderNameByDataType = (dataType?: DataType): string =>
  ({
    [DataType.ALBUM]: "Most listened album",
    [DataType.ARTIST]: "Most listened artist",
    [DataType.TRACK]: "Most listened track",
    [DataType.UNDEFINED]: "Most listened",
  }[dataType || DataType.UNDEFINED]);

export const Header = ({
  palette,
  section,
}: IClassicChartHeaderProps): JSX.Element => {
  const theme: React.CSSProperties = {
    background: palette?.DarkMuted?.getHex(),
    color: palette?.DarkMuted?.getTitleTextColor(),
  };
  const image: React.CSSProperties = {
    backgroundImage: `url(${section?.image})`,
  };
  const gradient: React.CSSProperties = {
    background: `linear-gradient(0.25turn, rgba(${palette?.DarkMuted?.getRgb().join(
      ", ",
    )}, 1), rgba(${palette?.DarkMuted?.getRgb().join(", ")}, 0))`,
  };

  const commonClassName = clsx("text-truncate", styles.text);

  const titleClassName = clsx("headline-3", commonClassName);
  const textClassName = clsx("headline-5", commonClassName);
  const subtitleClassName = clsx(
    "headline-4",
    "font-weight-light",
    commonClassName,
  );

  return (
    <header className={styles.root} style={theme}>
      <div className={styles.background}>
        <div className={styles.image} style={image} />
        <div className={styles.overlay} style={gradient} />
      </div>
      <div className={styles.content}>
        <h2 className={textClassName}>
          {getHeaderNameByDataType(section?.dataType)}
        </h2>
        <h1 className={titleClassName}>{section?.name}</h1>
        {section?.artist && (
          <h2 className={subtitleClassName}>{section?.artist}</h2>
        )}
        <h2 className={textClassName}>{section?.playcount} scrobbles</h2>
      </div>
    </header>
  );
};
