import { ChartType, IChart } from "../../contexts/Chart/ChartContext.interface";
import { content, DataType, IGetPalette } from "./ChartGenerator.interface";
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

export const getImageByChartType = (chart: IChart): string =>
  ({
    [ChartType.TOP_ALBUMS]: chart.albums[0].image,
    [ChartType.TOP_ARTISTS]: chart.artists[0].image,
    [ChartType.TOP_TRACKS]: chart.tracks[0].image,
  }[chart.type]);

export const getHeaderContentByChartType = (chart: IChart): content =>
  ({
    [ChartType.TOP_ALBUMS]: { ...chart.albums[0], type: DataType.ALBUM },
    [ChartType.TOP_ARTISTS]: { ...chart.artists[0], type: DataType.ARTIST },
    [ChartType.TOP_TRACKS]: { ...chart.tracks[0], type: DataType.TRACK },
  }[chart.type]);

export const getBodyContentsByChartType = (chart: IChart): content[] =>
  ({
    [ChartType.TOP_ALBUMS]: chart.albums
      .slice(1)
      .map(album => ({ ...album, type: DataType.ALBUM })),
    [ChartType.TOP_ARTISTS]: chart.artists
      .slice(1)
      .map(artist => ({ ...artist, type: DataType.ARTIST })),
    [ChartType.TOP_TRACKS]: chart.tracks
      .slice(1)
      .map(track => ({ ...track, type: DataType.TRACK })),
  }[chart.type]);

export const getFooterContentsByChartType = (chart: IChart): content[] =>
  ({
    [ChartType.TOP_ALBUMS]: [
      { ...chart.artists[0], type: DataType.ARTIST },
      { ...chart.tracks[0], type: DataType.TRACK },
    ],
    [ChartType.TOP_ARTISTS]: [
      { ...chart.albums[0], type: DataType.ALBUM },
      { ...chart.tracks[0], type: DataType.TRACK },
    ],
    [ChartType.TOP_TRACKS]: [
      { ...chart.albums[0], type: DataType.ALBUM },
      { ...chart.artists[0], type: DataType.ARTIST },
    ],
  }[chart.type]);
