import { ChartType } from "../../contexts/ChartContext";

export enum Period {
  SEVEN_DAYS = "7day",
  ONE_MONTH = "1month",
  THREE_MONTHS = "3month",
  SIX_MONTHS = "6month",
  TWELVE_MONTHS = "12month",
  OVERALL = "overall",
}

export interface IFormData {
  user: string;
  chart: ChartType | unknown;
  period: Period | unknown;
}

export const START_FORM_DATA: Partial<IFormData> = {
  chart: ChartType.TOP_ALBUMS,
  period: Period.SEVEN_DAYS,
};
