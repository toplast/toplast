export type ContentType = 'album' | 'artist' | 'track'

export interface Content {
  artist: string
  image: string
  name: string
  playcount: string
  type: ContentType
}
