import Link from 'next/link'

import { version } from '../../../package.json'
import * as S from './Header.styles'
import { APP_NAME } from 'components/constants'

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Flex>
          <Link href="/">
            <S.Title>{APP_NAME}</S.Title>
          </Link>
          <S.Version>v{version}</S.Version>
        </S.Flex>
      </S.Container>
    </S.Wrapper>
  )
}

export { Header }
