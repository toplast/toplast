/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { handler } from "../../../functions/getAlbums";

describe("Get albums test", () => {
  it("Should return error if user parameter is blank", async () => {
    // @ts-ignore
    const albums = await handler({
      queryStringParameters: { user: "", limit: "5", period: "7day" },
    });

    expect(albums).toEqual({
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid parameters." }),
    });
  });

  it("Should return error if limit parameter is blank", async () => {
    // @ts-ignore
    const albums = await handler({
      queryStringParameters: { user: "castilh0s", limit: "", period: "7day" },
    });

    expect(albums).toEqual({
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid parameters." }),
    });
  });

  it("Should return error if period parameter is blank", async () => {
    // @ts-ignore
    const albums = await handler({
      queryStringParameters: { user: "castilh0s", limit: "5", period: "" },
    });

    expect(albums).toEqual({
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid parameters." }),
    });
  });
});
