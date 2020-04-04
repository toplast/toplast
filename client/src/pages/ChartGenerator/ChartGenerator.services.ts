import {
  chartData,
  DataType,
  IGetPalette,
  section,
} from "./ChartGenerator.interface";
import { ChartType } from "../../contexts/ChartContext";
import Vibrant from "node-vibrant";

export const getPalette = async ({
  image,
  setPalette,
}: IGetPalette): Promise<void> => {
  try {
    const palette = await Vibrant.from(image)
      .maxColorCount(32)
      .getPalette();

    setPalette(palette);
  } catch (error) {
    console.error(error);
  }
};

export const getImageByChartType = ([
  albumImage,
  artistImage,
  trackImage,
]: string[]) => (chartType: ChartType): string =>
  ({
    [ChartType.TOP_ALBUMS]: albumImage,
    [ChartType.TOP_ARTISTS]: artistImage,
    [ChartType.TOP_TRACKS]: trackImage,
  }[chartType]);

export const getBodyByChartType = ([albums, artists, tracks]: chartData) => (
  chartType: ChartType,
): section[] =>
  ({
    [ChartType.TOP_ALBUMS]: albums
      .slice(1)
      .map(album => ({ ...album, dataType: DataType.ALBUM })),
    [ChartType.TOP_ARTISTS]: artists
      .slice(1)
      .map(artist => ({ ...artist, dataType: DataType.ARTIST })),
    [ChartType.TOP_TRACKS]: tracks
      .slice(1)
      .map(track => ({ ...track, dataType: DataType.TRACK })),
  }[chartType]);

export const getFooterByChartType = ([albums, artists, tracks]: chartData) => (
  chartType: ChartType,
): section[] =>
  ({
    [ChartType.TOP_ALBUMS]: [
      { ...artists[0], dataType: DataType.ARTIST },
      { ...tracks[0], dataType: DataType.TRACK },
    ],
    [ChartType.TOP_ARTISTS]: [
      { ...albums[0], dataType: DataType.ALBUM },
      { ...tracks[0], dataType: DataType.TRACK },
    ],
    [ChartType.TOP_TRACKS]: [
      { ...albums[0], dataType: DataType.ALBUM },
      { ...artists[0], dataType: DataType.ARTIST },
    ],
  }[chartType]);
