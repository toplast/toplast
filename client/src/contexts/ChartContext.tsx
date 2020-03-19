/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import React, { useEffect, useState } from "react";

export enum ChartType {
  TOP_ALBUMS = "topAlbums",
  TOP_ARTISTS = "topArtists",
  TOP_TRACKS = "topTracks",
}

export const ChartContext = React.createContext<{
  chartType: ChartType;
  setChartType(chartType: ChartType): void;
}>({
  chartType: ChartType.TOP_ALBUMS,
  setChartType: (chartType: ChartType): void => {},
});

export const ChartProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  const getChartTypeFromLocalStorage = (): ChartType => {
    const chartTypeFromLocalStorage = window.localStorage.getItem("chartType");

    if (chartTypeFromLocalStorage) {
      return chartTypeFromLocalStorage as ChartType;
    }

    return ChartType.TOP_ALBUMS;
  };

  const [chartType, setChartType] = useState<ChartType>(
    getChartTypeFromLocalStorage(),
  );

  useEffect(() => window.localStorage.setItem("chartType", chartType), [
    chartType,
  ]);

  return (
    <ChartContext.Provider value={{ chartType, setChartType }}>
      {children}
    </ChartContext.Provider>
  );
};
