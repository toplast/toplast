import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ backgroundColor?: string; textColor?: string }>`
  height: 150px;
  align-items: center;

  display: flex;
  flex: 1 1 auto;
  justify-content: center;

  ${({ backgroundColor = '#fff', textColor = '#000' }) => {
    return css`
      background: ${backgroundColor};
      color: ${textColor};
    `
  }};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

export const Image = styled.img<{ rounded?: boolean }>`
  width: 80px;
  height: 80px;
  object-fit: cover;

  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

  ${({ rounded = false }) => {
    return css`
      border-radius: ${rounded ? '100%' : '3px'};
    `
  }}
`

export const Content = styled.div`
  margin-left: 0.5rem;
  width: 255px;
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
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.03125rem;
  line-height: 1.5rem;
`

export const Title = styled(Text)`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0rem;
  line-height: 2rem;
`

export const Subtitle = styled(Text)`
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 0.00937rem;
  line-height: 2rem;
`
