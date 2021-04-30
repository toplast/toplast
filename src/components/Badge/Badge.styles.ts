import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
`

export const Badge = styled.span<{
  backgroundColor?: string
  textColor?: string
  rounded?: boolean
}>`
  display: flex;
  position: absolute;
  transform: scale(1) translate(-50%, -50%);

  align-items: center;
  justify-content: center;

  border-radius: 100%;
  height: 37px;
  min-width: 37px;

  font-size: 0.875rem;
  font-weight: 500;

  ${({ backgroundColor = '#fff', textColor = '#000', rounded = false }) => {
    return css`
      background: ${backgroundColor};
      color: ${textColor};

      top: ${rounded ? '12.5%' : '5%'};
      left: ${rounded ? '12.5%' : '5%'};
    `
  }}
`
