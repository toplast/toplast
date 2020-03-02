import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { INVALID_PARAMS } from "../utils/responseMessages";
import { IUserGetTopAlbumsParams } from "@toplast/lastfm/lib/modules/user/params.interface";
import { getAlbums } from "./helper";
import { validateParams } from "../utils/validator";

export async function handler(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
  const params = event.queryStringParameters;

  if (!validateParams(params)) {
    return INVALID_PARAMS;
  }

  try {
    const albums = await getAlbums(
      (params as unknown) as IUserGetTopAlbumsParams,
    );

    return { statusCode: 200, body: JSON.stringify(albums) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
}
