import {
  album,
  artist,
  track,
} from "../../contexts/Chart/ChartContext.interface";
import { Palette } from "node-vibrant/lib/color";

export enum DataType {
  ALBUM = "album",
  ARTIST = "artist",
  TRACK = "track",
  UNDEFINED = "undefined",
}

export interface IGetPalette {
  image: string;
  setPalette(palette: Palette): void;
}

export type content = Partial<album & artist & track & { type: DataType }>;

export type chartData = [album[], artist[], track[]];
