export enum ChartType {
  TOP_ALBUMS = "topAlbums",
  TOP_ARTISTS = "topArtists",
  TOP_TRACKS = "topTracks",
}

interface ICommonData {
  image: string;
  name: string;
  playcount: string;
}

export type album = ICommonData & { artist: string };
export type artist = ICommonData;
export type track = ICommonData & { artist: string };

export interface IChart {
  albums: album[];
  artists: artist[];
  tracks: track[];
  type: ChartType;
}
