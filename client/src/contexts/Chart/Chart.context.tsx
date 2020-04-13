/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ChartType, IChart } from "./Chart.interface";
import React from "react";

interface IChartProviderProps {
  children: JSX.Element;
}

const defaultChart: IChart = {
  albums: [],
  artists: [],
  tracks: [],
  type: ChartType.TOP_ARTISTS,
};

export const ChartContext = React.createContext<{
  chart: IChart;
  setChart(chart: IChart): void;
}>({
  chart: defaultChart,
  setChart: (chart: IChart): void => {},
});

export const ChartProvider = (props: IChartProviderProps): JSX.Element => {
  const getChartFromLocalStorage = (): IChart => {
    const chartFromLocalStorage = window.localStorage.getItem("chart");

    if (!chartFromLocalStorage) {
      return defaultChart;
    }

    return JSON.parse(chartFromLocalStorage);
  };

  const [chart, setChart] = React.useState<IChart>(getChartFromLocalStorage());

  React.useEffect(
    () => window.localStorage.setItem("chart", JSON.stringify(chart)),
    [chart],
  );

  return (
    <ChartContext.Provider value={{ chart, setChart }}>
      {props.children}
    </ChartContext.Provider>
  );
};
