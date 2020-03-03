import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { INVALID_PARAMS } from "../utils/responseMessages";
import { IUserGetTopTracksParams } from "@toplast/lastfm/lib/modules/user/params.interface";
import { getTracks } from "./helper";
import { validateParams } from "../utils/validator";

export async function handler(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
  const params = event.queryStringParameters;

  if (!validateParams(params)) {
    return INVALID_PARAMS;
  }

  try {
    const tracks = await getTracks(
      (params as unknown) as IUserGetTopTracksParams,
    );

    return { statusCode: 200, body: JSON.stringify(tracks) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
}
