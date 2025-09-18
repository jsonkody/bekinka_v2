// git pu "recordy" (jen pole, která fakt používáme)
export type PBId = string

export interface PBGenre {
  id: PBId
  slug: string
  name_cs: string
  name_en: string
  collectionId: string
}

export interface PBPerson {
  id: PBId
  nickname: string
  collectionId: string
}

export interface PBRequest {
  id: PBId
  status: 'pending' | 'approved' | 'rejected'
  people?: PBId[] // raw
  expand?: {
    people?: PBPerson[]
  }
  collectionId: string
}

export interface PBGame {
  id: PBId
  title: string
  slug: string
  cover_image?: string
  genres?: PBId[] // raw
  request?: PBId | null
  expand?: {
    genres?: PBGenre[]
    request?: PBRequest
  }
  collectionId: string
}

export interface PBReview {
  id: PBId
  game: PBId
  score?: number
  text?: string
  emoji?: string
  stream_index?: number
  expand?: {
    game?: PBGame
  }
}
