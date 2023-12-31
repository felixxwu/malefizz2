export type Circle = {
  id: string
  position: {
    x: number
    y: number
  }
  neighbours: string[]
  start: string | null
  finish: boolean
  safeZone: boolean
  zoomInPoint: boolean
  text?: string
  fontSize?: number
  onClick?: () => void
}

export type Map = Circle[]
