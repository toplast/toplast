/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import LastFm from "@toplast/lastfm";
import { handler } from "../../../functions/getAlbums";
import topAlbums from "../../fixtures/topAlbums";

jest.mock("@toplast/lastfm");

describe("Get albums test", () => {
  beforeAll(() => {
    // @ts-ignore
    LastFm.mockImplementation(() => {
      return {
        user: {
          getTopAlbums: (): any => topAlbums,
        },
      };
    });
  });

  beforeEach(() => {
    // @ts-ignore
    LastFm.mockClear();
  });

  it("Should return error if user parameter is blank", async () => {
    // @ts-ignore
    const response = await handler({
      queryStringParameters: { user: "", limit: "5", period: "7day" },
    });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.body)).toEqual({
      message: "Invalid parameters.",
    });
  });

  it("Should return error if limit parameter is blank", async () => {
    // @ts-ignore
    const response = await handler({
      queryStringParameters: { user: "castilh0s", limit: "", period: "7day" },
    });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.body)).toEqual({
      message: "Invalid parameters.",
    });
  });

  it("Should return error if period parameter is blank", async () => {
    // @ts-ignore
    const response = await handler({
      queryStringParameters: { user: "castilh0s", limit: "5", period: "" },
    });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.body)).toEqual({
      message: "Invalid parameters.",
    });
  });

  it("Should return albums with status code 200", async () => {
    // @ts-ignore
    const response = await handler({
      queryStringParameters: { user: "castilh0s", limit: "1", period: "7day" },
    });

    expect(response.statusCode).toEqual(200);
    expect(JSON.parse(response.body)).toEqual([
      {
        artist: "Rodrigo Zin",
        image:
          "https://lastfm.freetls.fastly.net/i/u/300x300/e91498885e168065470dda7e05dacd11.jpg",
        name: "Fazendo Grana Pro Meu Filme",
        playcount: "675",
      },
    ]);
  });
});
