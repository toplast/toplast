import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { LastFm } from "@toplast/lastfm";
import { IUserGetTopAlbumsParams } from "@toplast/lastfm/lib/modules/user/params.interface";

const DEFAULT_IMAGE =
  "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";
const lastFm = new LastFm("SOME_NICE_API_KEY");

export async function handler(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
  const params = (event.queryStringParameters as unknown) as IUserGetTopAlbumsParams;

  if (!params?.user || !params?.period || !params?.limit) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid parameters.",
      }),
    };
  }

  try {
    const albums = (await lastFm.user.getTopAlbums(params)).topalbums.album.map(
      album => ({
        artist: album.artist.name,
        image: album.image[album.image.length - 1]["#text"] || DEFAULT_IMAGE,
        name: album.name,
        playcount: album.playcount,
      }),
    );

    return { statusCode: 200, body: JSON.stringify(albums) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
}
