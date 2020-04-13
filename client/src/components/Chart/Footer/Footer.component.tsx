import "./Footer.style.scss";
import {
  DataType,
  section,
} from "../../../pages/ChartGenerator/ChartGenerator.interface";
import { Palette } from "node-vibrant/lib/color";
import React from "react";

interface IFooterProps {
  palette?: Palette;
  sections?: section[];
}

export const Footer = ({ palette, sections }: IFooterProps): JSX.Element => {
  const getSectionNameByDataType = (dataType: DataType | undefined): string => {
    const sectionByDataType = {
      [DataType.ALBUM]: "Most listened album",
      [DataType.ARTIST]: "Most listened artist",
      [DataType.TRACK]: "Most listened track",
    };

    if (dataType) {
      return sectionByDataType[dataType];
    }

    return "Most listed";
  };

  return (
    <footer
      className="footer"
      style={{
        background: palette?.LightMuted?.getHex(),
        color: palette?.LightMuted?.getTitleTextColor(),
      }}
    >
      {sections?.map(section => (
        <div className="footer__section" key={section.name}>
          <div className="footer__section__image">
            <img
              className={section.dataType === DataType.ARTIST ? "round" : ""}
              src={section.image}
              alt={section.name}
            />
          </div>
          <div className="footer__section__content">
            <h4 className="footer__section__content__name body-1">
              {getSectionNameByDataType(section.dataType)}
            </h4>
            <h2 className="footer__section__content__title font-weight-medium headline-5 text-truncate">
              {section.name}
            </h2>
            {section?.artist && (
              <h3 className="footer__section__content__subtitle headline-6 text-truncate">
                {section.artist}
              </h3>
            )}
          </div>
        </div>
      ))}
    </footer>
  );
};
