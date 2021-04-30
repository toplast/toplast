import Vibrant from 'node-vibrant'
import { Palette } from 'node-vibrant/lib/color'

import { ContentType } from 'components/Infographic'

export const getColorPalette = async (
  image: string,
  setColorPalette: (palette: Palette) => void
) => {
  try {
    const colorPalette = await Vibrant.from(image)
      .maxColorCount(32)
      .getPalette()

    setColorPalette(colorPalette)
  } catch (error) {
    console.error(error)
  }
}

export const getDescriptionByType = (type?: ContentType) =>
  ({
    album: 'Most listened album',
    artist: 'Most listened artist',
    track: 'Most listened track',
    undefined: 'Most listened',
  }[type || 'undefined'])
