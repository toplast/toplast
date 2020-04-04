import { ChartType } from "../../contexts/ChartContext";
import { IAlbum } from "../../contexts/AlbumContext";
import { IArtist } from "../../contexts/ArtistContext";
import { ITrack } from "../../contexts/TrackContext";
import { Palette } from "node-vibrant/lib/color";

export enum DataType {
  ALBUM = "album",
  ARTIST = "artist",
  TRACK = "track",
}

export interface IGetPalette {
  image: string;
  setPalette(palette: Palette): void;
}

export interface ISections {
  [ChartType.TOP_ALBUMS]: section[];
  [ChartType.TOP_ARTISTS]: section[];
  [ChartType.TOP_TRACKS]: section[];
}

export type section = Partial<
  IAlbum & IArtist & ITrack & { dataType: DataType }
>;

export type chartData = [IAlbum[], IArtist[], ITrack[]];
