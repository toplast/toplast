import { ChartContext, ChartType } from "../../contexts/ChartContext";
import { IFormData, START_FORM_DATA } from "./Home.interface";
import React, { useContext, useState } from "react";
import { AlbumContext } from "../../contexts/AlbumContext";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ChartFormComponent } from "../../components/ChartForm/ChartForm.component";
import { getChartData } from "./Home.service";
import styles from "./Home.module.scss";
import { TrackContext } from "../../contexts/TrackContext";
import { useHistory } from "react-router-dom";

export const Home = (): JSX.Element => {
  const history = useHistory();

  const { setChartType } = useContext(ChartContext);
  const { setAlbums } = useContext(AlbumContext);
  const { setArtists } = useContext(ArtistContext);
  const { setTracks } = useContext(TrackContext);

  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = useState<Partial<IFormData>>(START_FORM_DATA);

  const changeFormData = (data: Partial<IFormData>): void => {
    setFormData({
      ...formData,
      ...data,
    });
  };

  const generateChart = async (): Promise<void> => {
    setLoading(true);

    const [albumData, artistData, trackData] = await getChartData(formData);

    setChartType(formData.chart as ChartType);
    setAlbums(albumData);
    setArtists(artistData);
    setTracks(trackData);

    history.push("/generate");
  };

  return (
    <div className="text-center">
      <h1 className={`headline-4 font-weight-regular ${styles.title}`}>
        TopLast
      </h1>
      <h2 className={`headline-6 ${styles.subtitle}`}>
        A Last.fm chart generator
      </h2>

      <ChartFormComponent
        {...{ formData, changeFormData, generateChart, loading }}
      />
    </div>
  );
};
