/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Palette } from 'node-vibrant/lib/color'
import { useEffect, useState } from 'react'

import { Body, Footer, Header } from '.'
import { getColorPalette } from './Infographic.services'
import * as S from './Infographic.styles'

const data = {
  header: {
    artist: 'MURICA',
    image: 'https://lastfm.freetls.fastly.net/i/u/300x300/4d0a9bbddeb08d24229a05e0fef57310.png',
    name: 'Sede',
    playcount: '29',
    type: 'album',
  },
  body: [
    {
      artist: 'Puro Suco',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/d50623eb39716adbf88fc2c2ef7a1180.jpg',
      name: 'Rataria Popular Brasileira',
      type: 'album',
      playcount: '100',
    },
    {
      artist: 'MURICA',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/281b069764748c3ec9f679f7896031dc.jpg',
      name: 'Fome',
      type: 'album',
      playcount: '26',
    },
    {
      artist: 'Marcelo D2',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/effc7b1c96c893b0ee84e0f40f9b827b.jpg',
      name: 'Assim tocam os MEUS TAMBORES',
      type: 'album',
      playcount: '21',
    },
    {
      artist: 'Leto',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/45530b6640b7f10b39faa7405913d29b.jpg',
      name: 'SUGAR MAMA',
      playcount: '16',
      type: 'album',
    },
  ],
  footer: [
    {
      image: 'https://lastfm.freetls.fastly.net/i/u/ar0/7d846093a406d912d79910fa6ea34407.jpg',
      name: 'Puro Suco',
      playcount: '72',
      type: 'artist',
    },
    {
      artist: 'The Beatles',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/307370ac9c7cb089bcd6f60f1222f7c2.jpg',
      name: 'Here Comes The Sun - Remastered 2009',
      playcount: '14',
      type: 'track',
    },
  ],
}

const Infographic = () => {
  const infographicData = data

  const [colorPalette, setColorPalette] = useState<Palette>()

  useEffect(() => {
    getColorPalette(infographicData.header.image, setColorPalette)
  }, [infographicData])

  return (
    <S.Wrapper>
      {/* @ts-ignore */}
      <Header colorPalette={colorPalette} data={infographicData.header} />
      {/* @ts-ignore */}
      <Body colorPalette={colorPalette} data={infographicData.body} />
      {/* @ts-ignore */}
      <Footer colorPalette={colorPalette} data={infographicData.footer} />
    </S.Wrapper>
  )
}

export { Infographic }
