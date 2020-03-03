/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import artists from "../../fixtures/artists";
import { handler } from "../../../functions/getArtists";

jest.mock("../../../functions/getArtists/helper", () => ({
  getArtists: jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve(artists))
    .mockImplementation(() => Promise.reject({ message: "Some error" })),
}));

describe("Get artists test", () => {
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

  it("Should return artists with status code 200", async () => {
    // @ts-ignore
    const response = await handler({
      queryStringParameters: { user: "castilh0s", limit: "1", period: "7day" },
    });

    expect(response.statusCode).toEqual(200);
    expect(JSON.parse(response.body)).toEqual([
      {
        name: "Rodrigo Zin",
        playcount: "350",
        image:
          "https://lastfm.freetls.fastly.net/i/u/ar0/537597874507a15250784fe920d4ea9a.jpg",
      },
    ]);
  });

  it("Should return error with status code 500", async () => {
    // @ts-ignore
    const response = await handler({
      queryStringParameters: { user: "castilh0s", limit: "1", period: "7day" },
    });

    expect(response.statusCode).toEqual(500);
    expect(JSON.parse(response.body)).toEqual({
      message: "Some error",
    });
  });
});
