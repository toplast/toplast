import { content } from "../../pages/ChartGenerator/ChartGenerator.interface";
import { Palette } from "node-vibrant/lib/color";

export interface IChartProps {
  palette?: Palette;
  contents?: content[];
  content?: content;
}
