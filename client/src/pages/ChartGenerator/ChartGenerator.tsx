import { ChartContext, ChartType } from "../../contexts/ChartContext";
import {
  getBodyByChartType,
  getFooterByChartType,
  getImageByChartType,
  getPalette,
} from "./ChartGenerator.services";
import React, { useContext, useEffect, useState } from "react";
import { AlbumContext } from "../../contexts/AlbumContext";
import { ArtistChartHeader } from "../../components/ArtistChartHeader/ArtistChartHeader.component";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ChartBody } from "../../components/ChartBody/ChartBody.component";
import { ChartFooter } from "../../components/ChartFooter/ChartFooter.component";
import { Palette } from "node-vibrant/lib/color";
import { section } from "./ChartGenerator.interface";
import styles from "./ChartGenerator.module.scss";
import { TrackContext } from "../../contexts/TrackContext";

export const ChartGenerator = (): JSX.Element => {
  const { chartType } = useContext(ChartContext);
  const { albums } = useContext(AlbumContext);
  const { artists } = useContext(ArtistContext);
  const { tracks } = useContext(TrackContext);

  const [palette, setPalette] = useState<Palette>();
  const [body, setBody] = useState<section[]>();
  const [footer, setFooter] = useState<section[]>();

  useEffect(() => {
    const bodyByChartType = getBodyByChartType([albums, artists, tracks]);
    const footerByChartType = getFooterByChartType([albums, artists, tracks]);
    const imageByChartType = getImageByChartType([
      albums[0].image,
      artists[0].image,
      tracks[0].image,
    ]);

    getPalette({ image: imageByChartType(chartType), setPalette });

    setBody(bodyByChartType(chartType));
    setFooter(footerByChartType(chartType));
  }, [chartType, albums, artists, tracks]);

  return (
    <div className={styles.card}>
      {chartType === ChartType.TOP_ARTISTS && (
        <ArtistChartHeader artist={artists[0]} palette={palette} />
      )}

      <ChartBody sections={body} palette={palette} />
      <ChartFooter sections={footer} palette={palette} />
    </div>
  );
};
