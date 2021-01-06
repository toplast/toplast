import { Palette } from 'node-vibrant/lib/color'

import * as S from './Header.styles'
import { getDescriptionByType } from 'components/Infographic'

type DataType = 'album' | 'artist' | 'track' | 'undefined'

interface Props {
  colorPalette?: Palette
  data?: Partial<{
    artist: string
    image: string
    name: string
    playcount: string
    type: DataType
  }>
}

const Header = ({ colorPalette, data }: Props) => {
  const backgroundColor = colorPalette?.DarkMuted?.hex
  const textColor = colorPalette?.DarkMuted?.titleTextColor
  const color = colorPalette?.DarkMuted?.rgb.join(',')

  return (
    <S.Wrapper {...{ backgroundColor, textColor }}>
      <S.Background>
        <S.Image src={data?.image} />
        <S.Overlay {...{ color }} />
      </S.Background>

      <S.Content>
        <S.Description as="h1">{getDescriptionByType(data?.type)}</S.Description>

        <S.Title as="h1">{data?.name}</S.Title>

        {data?.artist && <S.Subtitle as="h2">{data?.artist}</S.Subtitle>}

        <S.Description as="h3">{data?.playcount} scrobbles</S.Description>
      </S.Content>
    </S.Wrapper>
  )
}

export { Header }
