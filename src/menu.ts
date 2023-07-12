import { Map } from './createMap'
import { createGame } from './game'
import { store } from './store'
import { zoomIntoCircle } from './zoom'

export const menuMap: Map = [
  {
    id: '1',
    position: { x: 1, y: 1 },
    neighbours: ['2', '3'],
    text: `Create Game`,
    fontSize: 13,
    onClick: () => {
      zoomIntoCircle(store.currentMap[0], { transition: 1000 })
      store.textOpacity = 0
      setTimeout(() => {
        createGame()
      }, 800)
    },
  },
  // {
  //   id: '2',
  //   position: { x: 2, y: 1 },
  //   neighbours: ['1', '3'],
  // },
  // {
  //   id: '3',
  //   position: { x: 6, y: 2 },
  //   neighbours: ['1', '2'],
  // },
]
