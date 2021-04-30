import { Palette } from 'node-vibrant/lib/color'

import * as S from './Footer.styles'
import { Content, getDescriptionByType } from 'components/Infographic'

interface Props {
  colorPalette: Palette
  data: Partial<Content>[]
}

const Footer = ({ colorPalette, data }: Partial<Props>) => {
  const backgroundColor = colorPalette?.LightMuted?.hex
  const textColor = colorPalette?.LightMuted?.titleTextColor

  return (
    <S.Wrapper {...{ backgroundColor, textColor }}>
      {data?.map((d) => (
        <S.Container key={d.name}>
          <S.Image src={d.image} rounded={d.type === 'artist'} />

          <S.Content>
            <S.Description as="h1">
              {getDescriptionByType(d.type)}
            </S.Description>
            <S.Title as="h1">{d.name}</S.Title>
            {d.artist && <S.Subtitle as="h2">{d.artist}</S.Subtitle>}
          </S.Content>
        </S.Container>
      ))}
    </S.Wrapper>
  )
}

export { Footer }
