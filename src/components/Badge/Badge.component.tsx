import * as S from './Badge.styles'

interface Props {
  backgroundColor: string
  children: JSX.Element
  content: string
  rounded: boolean
  textColor: string
}

const Badge = ({ backgroundColor, children, content, rounded, textColor }: Partial<Props>) => (
  <S.Wrapper>
    {children}
    <S.Badge {...{ backgroundColor, textColor, rounded }}>{content}</S.Badge>
  </S.Wrapper>
)

export { Badge }
