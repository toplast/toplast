import {
  album,
  artist,
  ChartType,
  track,
} from "../../contexts/Chart/ChartContext.interface";
import axios from "axios";
import { IFormData } from "./Home.interface";

const getAlbumData = async ({
  user,
  period,
  chart,
}: Partial<IFormData>): Promise<album[]> => {
  const limit = chart === ChartType.TOP_ALBUMS ? 5 : 1;

  const { data } = await axios.get("/getAlbums", {
    params: { user, period, limit },
  });

  return data;
};

const getArtistData = async ({
  user,
  period,
  chart,
}: Partial<IFormData>): Promise<artist[]> => {
  const limit = chart === ChartType.TOP_ARTISTS ? 5 : 1;

  const { data } = await axios.get("/getArtists", {
    params: { user, period, limit },
  });

  return data;
};

const getTrackData = async ({
  user,
  period,
  chart,
}: Partial<IFormData>): Promise<track[]> => {
  const limit = chart === ChartType.TOP_TRACKS ? 5 : 1;

  const { data } = await axios.get("/getTracks", {
    params: { user, period, limit },
  });

  return data;
};

export const getChartData = async ({
  user,
  period,
  chart,
}: Partial<IFormData>): Promise<[album[], artist[], track[]]> => {
  const promiseChartData: [
    Promise<album[]>,
    Promise<artist[]>,
    Promise<track[]>,
  ] = [
    getAlbumData({ user, period, chart }),
    getArtistData({ user, period, chart }),
    getTrackData({ user, period, chart }),
  ];

  return Promise.all<album[], artist[], track[]>(promiseChartData);
};
