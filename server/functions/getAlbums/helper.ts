import { IUserGetTopAlbumsParams } from "@toplast/lastfm/lib/modules/user/params.interface";
import LastFm from "@toplast/lastfm";
import config from "../utils/config";

const lastFm = new LastFm(config.get("LAST_FM_API_KEY"));

function getImage(images: { "#text": string }[]): string {
  return images[images.length - 1]["#text"] || config.DEFAULT_IMAGE;
}

export async function getAlbums(
  params: IUserGetTopAlbumsParams,
): Promise<
  { artist: string; image: string; name: string; playcount: string }[]
> {
  return (await lastFm.user.getTopAlbums(params)).topalbums.album.map(
    ({ artist, image, name, playcount }) => ({
      artist: artist.name,
      image: getImage(image),
      name,
      playcount,
    }),
  );
}
