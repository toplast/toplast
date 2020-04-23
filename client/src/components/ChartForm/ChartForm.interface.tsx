import { IFormData, Period } from "../../pages/Home/Home.interface";
import { ChartType } from "../../contexts/Chart/ChartContext.interface";

export interface IChartFormProps {
  formData: Partial<IFormData>;
  loading: boolean;
  changeFormData(data: Partial<IFormData>): void;
  generateChart(): void;
}

export const chartOptions = [
  { value: ChartType.TOP_ALBUMS, label: "Top albums" },
  { value: ChartType.TOP_ARTISTS, label: "Top artists" },
  { value: ChartType.TOP_TRACKS, label: "Top tracks" },
];

export const periods = [
  { value: Period.SEVEN_DAYS, label: "7 days" },
  { value: Period.ONE_MONTH, label: "1 month" },
  { value: Period.THREE_MONTHS, label: "3 months" },
  { value: Period.SIX_MONTHS, label: "6 months" },
  { value: Period.TWELVE_MONTHS, label: "12 months" },
  { value: Period.OVERALL, label: "Overall" },
];
