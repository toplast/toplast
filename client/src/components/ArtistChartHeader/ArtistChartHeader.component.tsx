import "./ArtistChartHeader.style.scss";
import { IArtist } from "../../contexts/ArtistContext";
import { Palette } from "node-vibrant/lib/color";
import React from "react";

interface IArtistChartHeaderProps {
  artist: IArtist;
  palette?: Palette;
}

export const ArtistChartHeader = ({
  artist,
  palette,
}: IArtistChartHeaderProps): JSX.Element => {
  return (
    <header>
      <div
        className="header"
        style={{
          background: palette?.DarkMuted?.getHex(),
          color: palette?.DarkMuted?.getTitleTextColor(),
        }}
      >
        <div className="header__background">
          <div
            className="header__background__image"
            style={{ backgroundImage: `url(${artist.image})` }}
          />
          <div
            className="header__background__overlay"
            style={{
              background: `linear-gradient(0.25turn, rgba(${palette?.DarkMuted?.getRgb().join(
                ", ",
              )}, 1), rgba(${palette?.DarkMuted?.getRgb().join(", ")}, 0))`,
            }}
          />
        </div>
        <div className="header__content">
          <h2 className="header__content__subtitle">Most listened artist</h2>
          <h1 className="header__content__title">{artist.name}</h1>
          <h2 className="header__content__subtitle">
            {artist.playcount} scrobbles
          </h2>
        </div>
      </div>
    </header>
  );
};
