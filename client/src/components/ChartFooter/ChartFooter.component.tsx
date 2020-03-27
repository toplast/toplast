import "./ChartFooter.style.scss";
import { DataType } from "../../pages/GenerateChart/GenerateChart.interface";
import { IAlbum } from "../../contexts/AlbumContext";
import { IArtist } from "../../contexts/ArtistContext";
import { ITrack } from "../../contexts/TrackContext";
import { Palette } from "node-vibrant/lib/color";
import React from "react";

export const ChartFooterComponent = ({
  palette,
  sections,
}: {
  palette: Palette | undefined;
  sections:
    | Partial<IAlbum & IArtist & ITrack & { dataType: DataType }>[]
    | undefined;
}): JSX.Element => {
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
    <div
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
            <h4 className="footer__section__content__name">
              {getSectionNameByDataType(section.dataType)}
            </h4>
            <h2 className="footer__section__content__title">{section.name}</h2>
            {section?.artist && (
              <h3 className="footer__section__content__subtitle">
                {section.artist}
              </h3>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
