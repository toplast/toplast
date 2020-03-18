/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import React, { useEffect, useState } from "react";

export interface ITrack {
  artist: string;
  image: string;
  name: string;
  playcount: string;
}

export const TrackContext = React.createContext<{
  tracks: ITrack[];
  setTracks(tracks: ITrack[]): void;
}>({
  tracks: [],
  setTracks: (tracks: ITrack[]): void => {},
});

export const TrackProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  const getTracksFromLocalStorage = (): ITrack[] => {
    const tracksFromLocalStorage = window.localStorage.getItem("tracks");

    if (tracksFromLocalStorage) {
      return JSON.parse(tracksFromLocalStorage);
    }

    return [];
  };

  const [tracks, setTracks] = useState<ITrack[]>(getTracksFromLocalStorage());

  useEffect(
    () => window.localStorage.setItem("tracks", JSON.stringify(tracks)),
    [tracks],
  );

  return (
    <TrackContext.Provider value={{ tracks, setTracks }}>
      {children}
    </TrackContext.Provider>
  );
};
