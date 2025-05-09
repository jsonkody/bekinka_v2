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

interface Picture {
  name: string
  description: string
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

export type { Genre, IconName, Picture, Game }
