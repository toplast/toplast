import * as dotenv from "dotenv";

dotenv.config();

export default {
  get: (key: string): string => {
    return process.env[key];
  },
  DEFAULT_IMAGE:
    "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
};
