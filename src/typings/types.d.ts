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

export type { IconName, Photo, Game }
