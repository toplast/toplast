import axios from "axios";
import { ChartType } from "../../contexts/ChartContext";
import { IAlbum } from "../../contexts/AlbumContext";
import { IArtist } from "../../contexts/ArtistContext";
import { IFormData } from "./Home.interface";
import { ITrack } from "../../contexts/TrackContext";

const getAlbumData = async ({
  user,
  period,
  chart,
}: Partial<IFormData>): Promise<IAlbum[]> => {
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
}: Partial<IFormData>): Promise<IArtist[]> => {
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
}: Partial<IFormData>): Promise<ITrack[]> => {
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
}: Partial<IFormData>): Promise<[IAlbum[], IArtist[], ITrack[]]> => {
  const promiseChartData: [
    Promise<IAlbum[]>,
    Promise<IArtist[]>,
    Promise<ITrack[]>,
  ] = [
    getAlbumData({ user, period, chart }),
    getArtistData({ user, period, chart }),
    getTrackData({ user, period, chart }),
  ];

  return Promise.all<IAlbum[], IArtist[], ITrack[]>(promiseChartData);
};
