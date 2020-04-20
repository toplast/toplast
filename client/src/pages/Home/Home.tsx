import { IFormData, START_FORM_DATA } from "./Home.interface";
import React, { useContext, useState } from "react";
import { ChartContext } from "../../contexts/Chart/ChartContext";
import { ChartFormComponent } from "../../components/ChartForm/ChartForm.component";
import { ChartType } from "../../contexts/Chart/ChartContext.interface";
import clsx from "clsx";
import { getChartData } from "./Home.service";
import styles from "./Home.module.scss";
import { useHistory } from "react-router-dom";

export const Home = (): JSX.Element => {
  const history = useHistory();

  const { setChart } = useContext(ChartContext);

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

    if (!formData.user) {
      setLoading(false);
      return;
    }

    const [albumData, artistData, trackData] = await getChartData(formData);

    setChart({
      albums: albumData,
      artists: artistData,
      tracks: trackData,
      type: formData.chart as ChartType,
    });

    history.push("/generate");
  };

  const titleClass = clsx("headline-4", "font-weight-regular", styles.text);
  const subtitleClass = clsx("headline-6", styles.text);

  return (
    <div className="text-center">
      <div className={styles.container}>
        <h1 className={titleClass}>TopLast</h1>
        <h2 className={subtitleClass}>A Last.fm chart generator</h2>
      </div>

      <ChartFormComponent
        {...{ formData, changeFormData, generateChart, loading }}
      />
    </div>
  );
};
