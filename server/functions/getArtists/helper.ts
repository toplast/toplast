import * as cheerio from "cheerio";
import { IUserGetTopAlbumsParams } from "@toplast/lastfm/lib/modules/user/params.interface";
import LastFm from "@toplast/lastfm";
import axios from "axios";
import config from "../utils/config";

const lastFm = new LastFm(config.get("LAST_FM_API_KEY"));

async function getImage(url: string): Promise<string> {
  const { data } = await axios(url);
  const element = cheerio(".header-new-background-image", data)[0];

  return element.attribs?.content || config.DEFAULT_IMAGE;
}

export async function getArtists(
  params: IUserGetTopAlbumsParams,
): Promise<{ name: string; playcount: string; image: string }[]> {
  const artistsPromise = await (
    await lastFm.user.getTopArtists(params)
  ).topartists.artist.map(async ({ name, playcount, url }) => ({
    name,
    playcount,
    image: await getImage(url),
  }));

  return Promise.all(artistsPromise);
}
