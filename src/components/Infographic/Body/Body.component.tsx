import { Palette } from 'node-vibrant/lib/color'

import * as S from './Body.styles'
import Badge from 'components/Badge'

type DataType = 'album' | 'artist' | 'track' | 'undefined'

interface Props {
  colorPalette: Palette
  data: Partial<{
    artist: string
    image: string
    name: string
    playcount: string
    type: DataType
  }>[]
}

const Body = ({ colorPalette, data }: Partial<Props>) => {
  const backgroundColor = colorPalette?.Muted?.hex
  const textColor = colorPalette?.Muted?.titleTextColor

  const badgeBgColor = colorPalette?.DarkMuted?.hex
  const badgeColor = colorPalette?.DarkMuted?.titleTextColor

  return (
    <S.Wrapper {...{ backgroundColor, textColor }}>
      {data?.map((d) => (
        <S.Column key={d.name}>
          <Badge
            backgroundColor={badgeBgColor}
            content={d.playcount}
            rounded={d.type === 'artist'}
            textColor={badgeColor}
          >
            <S.Image src={d.image} rounded={d.type === 'artist'} />
          </Badge>

          <S.Title as="h1">{d.name}</S.Title>
          {d.artist && <S.Subtitle as="h2">{d.artist}</S.Subtitle>}
        </S.Column>
      ))}
    </S.Wrapper>
  )
}

export { Body }
