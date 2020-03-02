import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { INVALID_PARAMS } from "../utils/responseMessages";
import { IUserGetTopArtistsParams } from "@toplast/lastfm/lib/modules/user/params.interface";
import { getArtists } from "./helper";
import { validateParams } from "../utils/validator";

export async function handler(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
  const params = event.queryStringParameters;

  if (!validateParams(params)) {
    return INVALID_PARAMS;
  }

  try {
    const artists = await getArtists(
      (params as unknown) as IUserGetTopArtistsParams,
    );

    return { statusCode: 200, body: JSON.stringify(artists) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
}
