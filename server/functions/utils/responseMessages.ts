import { APIGatewayProxyResult } from "aws-lambda";

export const INVALID_PARAMS: APIGatewayProxyResult = {
  statusCode: 400,
  body: JSON.stringify({
    message: "Invalid parameters.",
  }),
};
