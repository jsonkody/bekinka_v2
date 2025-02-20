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

export type { IconName, Photo }
