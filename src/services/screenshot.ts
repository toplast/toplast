import { Options } from 'html2canvas'

/**
 * Take screenshot and generate image from a DOM node
 *
 * @class ScreenShot
 */
class ScreenShot {
  private node?: HTMLElement
  private html2canvas?: (
    element: HTMLElement,
    options?: Partial<Options>
  ) => Promise<HTMLCanvasElement>

  constructor({ node }: { node: HTMLElement }) {
    // It doesn't support SSR
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const html2canvas = require('html2canvas')

    this.html2canvas = html2canvas as typeof html2canvas
    this.node = node
  }

  private async generateCanvas() {
    if (!this.node) {
      throw Error(`Node elements was not provide`)
    }

    if (!this.html2canvas) {
      return
    }

    const canvas = await this.html2canvas(this.node, {
      allowTaint: true,
      useCORS: true,
      backgroundColor: '#000',
      scale: 2,
    })

    return canvas
  }

  public async downloadImage(fileName: string) {
    const canvas = await this.generateCanvas()

    if (!canvas) return

    const a = document.createElement('a')
    a.href = canvas
      .toDataURL('image/jpeg')
      .replace('image/jpeg', 'image/octet-stream')
    a.download = `${fileName}.jpg`
    a.click()
  }

  public async getImage() {
    const canvas = await this.generateCanvas()

    if (!canvas) return

    return canvas
      .toDataURL('image/jpeg', 0.8)
      .replace(/^data:image\/jpeg;base64,/, '')
  }
}

export { ScreenShot }
