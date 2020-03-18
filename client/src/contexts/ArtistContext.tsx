/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import React, { useEffect, useState } from "react";

export interface IArtist {
  name: string;
  image: string;
  playcount: string;
}

export const ArtistContext = React.createContext<{
  artists: IArtist[];
  setArtists(artists: IArtist[]): void;
}>({
  artists: [],
  setArtists: (artists: IArtist[]): void => {},
});

export const ArtistProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  const getArtistsFromLocalStorage = (): IArtist[] => {
    const artistsFromLocalStorage = window.localStorage.getItem("artists");

    if (artistsFromLocalStorage) {
      return JSON.parse(artistsFromLocalStorage);
    }

    return [];
  };

  const [artists, setArtists] = useState<IArtist[]>(
    getArtistsFromLocalStorage(),
  );

  useEffect(
    () => window.localStorage.setItem("artists", JSON.stringify(artists)),
    [artists],
  );

  return (
    <ArtistContext.Provider value={{ artists, setArtists }}>
      {children}
    </ArtistContext.Provider>
  );
};
