import {
  getBodyContentsByChartType,
  getFooterContentsByChartType,
  getHeaderContentByChartType,
  getImageByChartType,
  getPalette,
} from "./ChartGenerator.services";
import React, { useContext, useEffect, useState } from "react";
import { Body } from "../../components/Chart/Body/Body.component";
import { ChartContext } from "../../contexts/Chart/ChartContext";
import { content } from "./ChartGenerator.interface";
import { Footer } from "../../components/Chart/Footer/Footer.component";
import { Header } from "../../components/Chart/Header/Header.component";
import { Palette } from "node-vibrant/lib/color";
import styles from "./ChartGenerator.module.scss";

export const ChartGenerator = (): JSX.Element => {
  const { chart } = useContext(ChartContext);

  const [palette, setPalette] = useState<Palette>();
  const [headerContent, setHeaderContent] = useState<content>();
  const [bodyContents, setBodyContents] = useState<content[]>();
  const [footerContents, setFooterContents] = useState<content[]>();

  useEffect(() => {
    getPalette({ image: getImageByChartType(chart), setPalette });

    setHeaderContent(getHeaderContentByChartType(chart));
    setBodyContents(getBodyContentsByChartType(chart));
    setFooterContents(getFooterContentsByChartType(chart));
  }, [chart]);

  return (
    <div className={styles.card}>
      <Header palette={palette} content={headerContent} />
      <Body palette={palette} contents={bodyContents} />
      <Footer palette={palette} contents={footerContents} />
    </div>
  );
};
