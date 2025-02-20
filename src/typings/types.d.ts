type IconName =
  | 'ArrDown'
  | 'ArrUp'
  | 'Ban'
  | 'Discord'
  | 'Max'
  | 'Min'
  | 'Instagram'
  | 'Discord'
  | 'Youtube'
  | 'Twitch'

interface Photo {
  name: string
  width: number
  height: number
  alt: string
}

enum Genre {
  Adventure = 101,
  RPG = 102,
  FPS = 103,
  Shooter = 104,
  Racing = 105,
  HackNslash = 106,
  Horror = 107,
  Survival = 108,
  Puzzle = 109,
  Platform = 110,
  Simulator = 111,
  Souls = 112,
  Indie = 113,
  MMO = 114,
}

interface GenreObj {
  title: string
  id: number
}

interface Game {
  index: number
  title: string
  requested?: string
  rating?: number
  genre: Genre[]
  emoji: string
  text: string
  img: {
    url: string
  }
}

export type { IconName, Photo, Genre, GenreObj, Game }
