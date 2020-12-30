import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{
  backgroundColor: string
  textColor: string
}>`
  height: 325px;
  position: relative;

  ${({ backgroundColor, textColor }) => {
    return css`
      background: ${backgroundColor};
      color: ${textColor};
    `
  }}
`

export const Background = styled.div`
  width: 45%;
  height: 100%;

  position: absolute;
  overflow: hidden;

  top: 0;
  right: 0;
`

export const Image = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;

  position: absolute;

  background-position: 50% 25%;
  background-size: cover;

  ${({ src }) => {
    return css`
      background-image: url(${src});
    `
  }}
`

export const Overlay = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;

  position: absolute;

  transform-origin: center left;

  ${({ color }) => {
    return css`
      background: linear-gradient(
        0.25turn,
        rgba(${color}, 1),
        rgba(${color}, 0)
      );
    `
  }}
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  width: 100%;
  height: 100%;

  justify-content: center;

  padding-left: 30px;
  padding-right: 330px;
  padding-bottom: 35px;
`

export const Text = styled.div`
  margin: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  text-decoration: inherit;
  text-transform: inherit;
`

export const Description = styled(Text)`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0rem;
  line-height: 2rem;
`

export const Title = styled(Text)`
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 0rem;
  line-height: 3.125rem;
`

export const Subtitle = styled(Text)`
  font-size: 2.125rem;
  font-weight: 300;
  letter-spacing: 0.01562rem;
  line-height: 2.5rem;
`
