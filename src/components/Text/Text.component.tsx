import * as S from './Text.styles'

interface Props {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | string
}

const Text = ({ size }: Props) => <S.Text />

export { Text }
