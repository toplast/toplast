import styled, { css } from 'styled-components'

interface Props {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | string
}

const sizes = {
  xsmall: '10px',
}

const sizeStyle = (props: Props) => {
  const size = props.size || 'medium'
  const data = sizes[size]

  if (data) {
    return css``
  }
}

export const Text = styled('span')``
