import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{
  backgroundColor?: string
  textColor?: string
}>`
  height: 275px;
  align-items: center;

  display: flex;
  flex: 1 1 auto;
  padding: 0 0.75rem;

  ${({ backgroundColor = '#fff', textColor = '#000' }) => {
    return css`
      background: ${backgroundColor};
      color: ${textColor};
    `
  }};
`

export const Column = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  width: 100%;

  text-align: center;
`

export const Image = styled.img<{ rounded?: boolean }>`
  width: 160px;
  height: 160px;
  object-fit: cover;

  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14),
    0 1px 14px 0 rgba(0, 0, 0, 0.12);

  ${({ rounded = false }) => {
    return css`
      border-radius: ${rounded ? '100%' : '5px'};
    `
  }};
`

export const Text = styled.div`
  margin: 0;
  padding: 0 0.35rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;
  text-decoration: inherit;
  text-transform: inherit;
`

export const Title = styled(Text)`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.03125rem;
  line-height: 1.5rem;
`

export const Subtitle = styled(Text)`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.03125rem;
  line-height: 1.5rem;
`
