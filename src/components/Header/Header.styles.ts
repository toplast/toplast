import styled from 'styled-components'

import { HEADER_HEIGHT } from 'components/sizes'

export const Wrapper = styled.header`
  height: ${HEADER_HEIGHT};
  background: #d51007;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0%;
  right: 0;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 1rem;

  width: 100%;
  max-width: 80rem;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  cursor: pointer;
  display: block;
`

export const Version = styled.p`
  color: #fff;
  font-size: 0.75rem;
  font-weight: 400;
  margin-left: 0.5rem;
`
