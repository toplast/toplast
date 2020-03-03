/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { handler } from "../../../functions/getTracks";
import tracks from "../../fixtures/tracks";

jest.mock("../../../functions/getTracks/helper", () => ({
  getTracks: jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve(tracks))
    .mockImplementation(() => Promise.reject({ message: "Some error" })),
}));

describe("Get tracks test", () => {
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
        name: "Intocável",
        playcount: "18",
        artist: "Rodrigo Zin",
        image:
          "https://lastfm.freetls.fastly.net/i/u/300x300/eaac7c4e4c41a9a0cd09a8ccc955972f.jpg",
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
