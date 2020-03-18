/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import React, { useEffect, useState } from "react";

export interface IAlbum {
  artist: string;
  image: string;
  name: string;
  playcount: string;
}

export const AlbumContext = React.createContext<{
  albums: IAlbum[];
  setAlbums(albums: IAlbum[]): void;
}>({
  albums: [],
  setAlbums: (albums: IAlbum[]): void => {},
});

export const AlbumProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  const getAlbumsFromLocalStorage = (): IAlbum[] => {
    const albumsFromLocalStorage = window.localStorage.getItem("albums");

    if (albumsFromLocalStorage) {
      return JSON.parse(albumsFromLocalStorage);
    }

    return [];
  };

  const [albums, setAlbums] = useState<IAlbum[]>(getAlbumsFromLocalStorage());

  useEffect(
    () => window.localStorage.setItem("albums", JSON.stringify(albums)),
    [albums],
  );

  return (
    <AlbumContext.Provider value={{ albums, setAlbums }}>
      {children}
    </AlbumContext.Provider>
  );
};
